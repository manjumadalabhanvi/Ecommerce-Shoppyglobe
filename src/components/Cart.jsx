import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";

function Cart() {
  // get cart items from redux store
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calculate total price of items in cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // clear all items from cart
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // navigate to checkout page
  const handleCheckout = () => {
    navigate("/checkout");
  };

  // show message if cart is empty
  if (cartItems.length === 0) {
    return <p className="p-6 text-center">Your cart is empty.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {/* render all cart items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      {/* total price and action buttons */}
      <div className="mt-6 flex justify-between items-center">
        <p className="text-xl font-bold">
          Total: ${totalPrice.toFixed(2)}
        </p>

        <div className="space-x-2">
          <button
            onClick={handleClearCart}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Cart
          </button>

          <button
            onClick={handleCheckout}
            className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-400"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
