import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-amber-500">ShoppyGlobe</div>
      <nav className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-amber-400">Home</a>
        <a href="/products" className="hover:text-amber-400">Products</a>
        <a href="/cart" className="hover:text-amber-400">Cart</a>
        <a href="/checkout" className="hover:text-amber-400">Checkout</a>
      </nav>
      <div className="md:hidden">
        {/* Mobile menu icon can go here later */}
        <button>☰</button>
      </div>
    </header>
  );
}

export default Header;
