import React from "react";
import { useNavigate } from "react-router-dom";

function ProductItem({ product, onAddToCart }) {
  const navigate = useNavigate();

  return (
    <div className="border rounded-md p-4 hover:shadow-lg">
      
      {/* product image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"   // lazy load image
        className="w-full h-48 object-cover mb-4"
      />

      {/* product title and price */}
      <h2 className="text-lg font-semibold">
        {product.title}
      </h2>
      <p className="text-amber-500 font-bold">
        ₹{product.price}
      </p>

      {/* action buttons */}
      <div className="flex gap-2 mt-3">
        
        {/* view product details */}
        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-1/2 bg-gray-700 text-white py-2 rounded hover:bg-gray-600"
        >
          View
        </button>

        {/* add product to cart */}
        <button
          onClick={() => onAddToCart(product)}
          className="w-1/2 bg-amber-500 text-white py-2 rounded hover:bg-amber-400"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
