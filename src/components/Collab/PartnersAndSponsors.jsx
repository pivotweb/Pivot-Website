import React from "react"; // Adjust the path to your actual image location

const PartnersAndSponsors = () => {
          return (
                    <section className="w-full flex flex-col md:flex-row items-center md:items-start justify-around px-6 md:px-8 py-6 md:py-0 mt-0 bg-white ">
                              {/* ✅ CHANGED: py-12 → py-6 to cut top & bottom padding by half on mobile */}
                              <div className="md:w-1/2 mb-4 md:mb-0">
                                        <h2 className="text-center md:text-start text-2xl md:text-3xl font-bold mb-4">
                                                  Partners and Sponsors
                                        </h2>

                                        <p className="text-gray-700 md:pr-12">
                                                  Our partners don’t just fund programs—they fund futures. These
                                                  organizations and individuals believe in impact, integrity, and
                                                  local-led innovation.
                                        </p>
                              </div>
                              <div className="md:w-2/3 flex justify-center md:justify-end overflow-hidden h-64 md:h-72">
                                        <img
                                                  src="/images/image 18.jpg"
                                                  alt="Partners and Sponsors"
                                                  className="rounded-lg w-[200%] h-full object-cover transition-transform duration-300 hover:scale-103"
                                        />
                              </div>
                    </section>
          );
};

export default PartnersAndSponsors;
