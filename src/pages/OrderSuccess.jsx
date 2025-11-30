import React from "react";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <CheckCircle size={80} className="text-green-600 mb-4" />
      <h1 className="text-3xl font-bold text-green-700">Order Placed Successfully!</h1>
      <p className="text-gray-600 mt-2">Thank you for shopping with us.</p>
    </div>
  );
}
