import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    // home page container
    <div className="p-6 text-center">
      
      {/* welcome heading */}
      <h1 className="text-3xl font-bold text-amber-500 mb-4">
        Welcome to ShoppyGlobe!
      </h1>

      {/* short description */}
      <p className="mb-6">
        Your one-stop shop for awesome products.
      </p>

      {/* navigate to products page */}
      <Link
        to="/products"
        className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-400"
      >
        View Products
      </Link>
    </div>
  );
}

export default Home;
