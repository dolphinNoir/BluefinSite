import React from "react";

function CustomCard({ step, description, bgColor, icon, iconComponent }) {
  return (
    <div
      className={`${bgColor} p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col items-center justify-center`}
    >
      <div className="flex items-center justify-between mb-4 w-full">
        <h3 className="text-lg font-semibold absolute top-8 text-white">
          {step}
        </h3>
        {icon && (
          <div className="flex items-center justify-center absolute top-6 right-4 h-12 w-12 rounded-full bg-blue-500 text-white mb-2">
            {iconComponent}
          </div>
        )}
      </div>
      <p className="text-lg text-gray-300 pt-8 ">{description}</p>
    </div>
  );
}

export default CustomCard;
