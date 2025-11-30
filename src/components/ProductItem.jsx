import React from "react";

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="border rounded-md p-4 hover:shadow-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-amber-500 font-bold">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-2 w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-400"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;
