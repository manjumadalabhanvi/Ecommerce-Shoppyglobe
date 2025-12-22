import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-[70vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-2">
        Order Placed Successfully 🎉
      </h1>
      <p className="text-gray-600">
        Redirecting to home page...
      </p>
    </div>
  );
}
