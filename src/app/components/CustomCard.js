import React from "react";

function CustomCard({ step, description, bgColor, icon, iconPath }) {
  return (
    <div
      className={`${bgColor} p-8 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-xl flex flex-col items-center justify-center`}
    >
      <div className="flex items-center justify-between mb-4 w-full">
        <h3 className="text-lg font-semibold mb-2 text-white">{step}</h3>
        {icon && (
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path d={iconPath} />
            </svg>
          </div>
        )}
      </div>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
}

export default CustomCard;
