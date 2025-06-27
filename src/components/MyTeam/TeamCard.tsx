import React from "react";

interface TeamCardProps {
          name: string;
          role: string;
          description: string;
          image: string;
          isFounder?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, description, image, isFounder }) => {
          const isFounderRole = role === "Founder";

          return (
                    <div
                              className={`bg-white rounded-xl overflow-hidden text-left flex flex-col h-[450px] ${isFounderRole ? "max-w-3xl mx-auto" : ""
                                        }`}
                    >
                              {/* Image Section */}
                              <div
                                        className={`flex justify-center items-center ${isFounderRole ? "h-[70%]" : "h-[50%] "
                                                  }`}
                              >
                                        <img
                                                  src={image}
                                                  alt={name}
                                                  className={`transition-transform duration-300 hover:scale-102 object-cover rounded-xl ${isFounderRole ? "w-[100%]" : "w-[80%]"
                                                            } h-full`}
                                        />
                              </div>

                              {/* Text Section */}
                              <div className="flex-1 p-3 text-center">
                                        <h3 className="text-xl font-semibold leading-tight">{name}</h3>
                                        <p className="text-xl text-orange-500 font-medium">{role}</p>
                                        <p className="text-gray-600 text-sm">{description}</p>
                              </div>
                    </div>
          );
};

export default TeamCard;
