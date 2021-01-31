import React from "react";

function SimpleCard() {
  return (
    <div className="max-w-md 2xl:bg-yellow-500 mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:bg-gray-50">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48  hover:overlay-red-200"
            src="/test2.jpg"
            alt="Nothing"
          />
        </div>{" "}
        <div className="p-8">
          <div className="uppercase tracking-wide text-indigo-500 text-sm font-semibold">
            case study
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            What the hell is going on.{" "}
          </a>
          <p className="mt-2 text-gray-500">
            My time is over? Honestly I have no idea about that yet. I asume
            time will tell, right?
          </p>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
