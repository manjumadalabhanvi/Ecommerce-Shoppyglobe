import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  /* ---------- SLIDER ---------- */
  const images = [
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1503602642458-232111445657",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, [images.length]);

  const nextSlide = () => {
    clearInterval(timerRef.current);
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    clearInterval(timerRef.current);
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  /* ---------- FEATURED PRODUCTS ---------- */
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      
      {/* ---------- SLIDER ---------- */}
      <div className="relative mb-10">
        <img
          src={images[current]}
          alt="banner"
          loading="lazy"
          className="w-full h-56 sm:h-72 md:h-80 object-cover rounded-lg pointer-events-none"
        />

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded z-10"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded z-10"
        >
          ›
        </button>
      </div>

      {/* ---------- HEADING ---------- */}
      <h1 className="text-3xl sm:text-4xl font-bold text-amber-500 text-center mb-4">
        Welcome to ShoppyGlobe
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Your one-stop shop for awesome products.
      </p>

      {/* ---------- FEATURED PRODUCTS ---------- */}
      <h2 className="text-2xl font-bold mb-6 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 hover:shadow-lg"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              loading="lazy"
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h3 className="font-semibold text-lg">
              {product.title}
            </h3>

            <p className="text-amber-500 font-bold mb-3">
              ₹{product.price}
            </p>

            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-400"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* ---------- VIEW ALL ---------- */}
      <div className="text-center mt-10">
        <Link
          to="/products"
          className="inline-block px-6 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

export default Home;
