import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  // redirect user to home page after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    // clear timer when component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      
      {/* success message */}
      <h1 className="text-3xl font-bold text-green-600 mb-2">
        Order Placed Successfully 🎉
      </h1>

      {/* redirect info */}
      <p className="text-gray-600">
        Redirecting to home page...
      </p>
    </div>
  );
}
