import React from "react";

function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
      
      {/* Product Image */}
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-20 h-20 object-cover rounded"
      />

      {/* Title + Price */}
      <div className="flex-1 px-4">
        <h2 className="text-lg font-semibold">{item.title}</h2>
        <p className="text-gray-600">
          ₹ {item.price} × {item.quantity} ={" "}
          <span className="font-bold">
            ₹ {item.price * item.quantity}
          </span>
        </p>
      </div>

      {/* Quantity Buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrease}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>

        <span className="font-bold">{item.quantity}</span>

        <button
          onClick={onIncrease}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          +
        </button>
      </div>

      {/* Remove Button */}
      <button
        onClick={onRemove}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
