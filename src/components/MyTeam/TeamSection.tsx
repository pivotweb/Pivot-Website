import React from "react";
import { teamData } from "./TeamData";
import TeamCard from "./TeamCard";

const TeamSection = () => {
          return (
                    <section className="px-0 py-0 text-center">
                              <h2 className="text-3xl md:text-4xl font-semibold mb-10">Meet the Team</h2>

                              <div className="mb-3">
                                        <TeamCard {...teamData[0]} isFounder />
                              </div>

                              <div className="grid gap-13 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 max-w-8xl mx-auto">
                                        {/* ✅ ADDED: gap-y-6 to reduce vertical gap on mobile */}
                                        {teamData.slice(1).map((member, index) => (
                                                  <TeamCard key={index} {...member} />
                                        ))}
                              </div>
                    </section>
          );
};

export default TeamSection;
