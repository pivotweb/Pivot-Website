import React from "react";

interface TeamCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  isFounder?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  description,
  image,
  isFounder,
}) => {
  const isFounderRole = role === "Founder";

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden text-left flex flex-col  ${
        isFounderRole ? "max-w-3xl mx-auto" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className={`flex justify-center items-center ${ isFounderRole ? "h-[400px] md:h-[600px]": "" } `}
      >
        
        <img
          src={image}
          alt={name}
          className={`transition-transform duration-300 hover:scale-102 object-top object-cover rounded-xl ${
            isFounderRole ? "w-full h-full" : "w-[80%] h-[250px]"
          } `}
        />
      </div>

      {/* Text Section */}
      <div className="p-3 text-center space-y-2 w-[90%] m-auto ">
        <h3 className="text-xl font-semibold leading-tight">{name}</h3>
        <p className="text-xl text-orange-500 font-medium">{role}</p>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
