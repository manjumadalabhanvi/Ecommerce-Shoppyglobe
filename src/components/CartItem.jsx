import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, adjustQuantity } from "../redux/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  // remove selected item from cart
  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  // update quantity of item (minimum value is 1)
  const handleQuantityChange = (e) => {
    const qty = Number(e.target.value);
    if (qty >= 1) {
      dispatch(adjustQuantity({ id: item.id, quantity: qty }));
    }
  };

  return (
    <div className="flex justify-between items-center border p-4 rounded">
      
      {/* product image and details */}
      <div className="flex items-center space-x-4">
        <img
          src={item.thumbnail}
          alt={item.title}
          loading="lazy"   // lazy load image for better performance
          className="w-20 h-20 object-cover rounded"
        />
        <div>
          <h2 className="font-semibold">{item.title}</h2>
          <p>${item.price}</p>
        </div>
      </div>

      {/* quantity input and remove button */}
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min="1"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-16 p-1 border rounded"
        />

        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-400"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;
