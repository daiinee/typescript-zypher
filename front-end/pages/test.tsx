import React from "react";
import SimpleCard from "../components/SimpleCard";

export default function text() {
  return (
    <div className="py-24">
      <div className="p-4 max-w-sm mx-auto bg-blue-50 rounded-xl shadow-md">
        <div className="text-m font-medium text-gray-800">
          This didn't change anything. Black sky black everything black.
        </div>
      </div>
      <div className="p-6"></div>
      <SimpleCard />
      <div className="h-48 ">
        <div className="bg-red-500 h-1/2 w-1/2 rounded-lg my-6 mx-auto"></div>
      </div>
    </div>
  );
}
