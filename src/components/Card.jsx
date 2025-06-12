import React from "react";

const Card = ({ icon, Techname }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#1a1a1a] rounded-lg py-6 px-4 hover:scale-105 transition-transform duration-300 shadow-lg">
      <div className="text-5xl mb-3">{icon}</div>
      <p className="text-white text-sm sm:text-base font-medium">{Techname}</p>
    </div>
  );
};

export default Card;
