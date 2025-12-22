import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [error, setError] = useState("");

  // If cart empty
  if (!cart || cart.length === 0) {
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

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      setError("Please fill all fields");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Enter a valid email");
      return false;
    }
    setError("");
    return true;
  };

  const handlePlaceOrder = () => {
  if (!validate()) return;

  dispatch(clearCart());
  navigate("/order-success"); // ✅ ABSOLUTE PATH (IMPORTANT)
};


  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Billing */}
      <div className="border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>

        {["name", "email", "address", "phone"].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field}
            className="w-full p-2 border rounded mb-3"
          />
        ))}

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <button
          onClick={handlePlaceOrder}
          className="w-full bg-amber-500 text-white py-2 rounded"
        >
          Place Order
        </button>
      </div>

      {/* Summary */}
      <div className="border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-3" />
        <h3 className="text-xl font-bold">Total: ₹{total}</h3>
      </div>
    </div>
  );
}
