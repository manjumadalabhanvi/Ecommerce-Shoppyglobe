// src/pages/Checkout.jsx
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  // eslint-disable-next-line no-unused-vars
  const cart = useSelector((state) => state.cart.items); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" });
  const [error, setError] = useState("");

  if (!cart.length) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
        <button
          onClick={() => navigate("/products")}
          className="px-4 py-2 bg-amber-500 text-white rounded"
        >
          View Products
        </button>
      </div>
    );
  }

  const total = cart.reduce((s, item) => s + item.price * item.quantity, 0);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      setError("Please fill all fields.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Enter a valid email.");
      return false;
    }
    setError("");
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;
    dispatch(clearCart());
    navigate("/order-success"); // redirect to order success page
  };

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Billing Form */}
      <div className="border p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
        {["name", "email", "address", "phone"].map((field) => (
          <label key={field} className="block mb-2">
            <span className="text-sm font-medium">
              {field[0].toUpperCase() + field.slice(1)}
            </span>
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded"
              placeholder={field}
              aria-label={field}
            />
          </label>
        ))}
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-amber-500 hover:bg-amber-400 text-white py-2 rounded"
        >
          Place Order
        </button>
      </div>

      {/* Order Summary */}
      <div className="border p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        <div className="space-y-3 mb-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div>
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-600">
                    {item.quantity} × ₹{item.price}
                  </div>
                </div>
              </div>
              <div className="font-semibold">₹{item.price * item.quantity}</div>
            </div>
          ))}
        </div>
        <hr className="my-3" />
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium">Total</div>
          <div className="text-2xl font-bold">₹{total.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
