import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../assets/error.svg"; 

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="w-full md:w-[92%] lg:w-[82%] xl:w-[72%] mx-auto max-w-2xl text-center">

        <img
          src={error}
          alt="Error Illustration"
          className="w-40 sm:w-56 md:w-64 mx-auto mb-6"
        />

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">Oops! Page not found.</h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition cursor-pointer w-full sm:w-auto"
        >
          Go back home
        </button>
      </div>
    </div>
  );
}

