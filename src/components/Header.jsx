import React from "react";

function Header() {
  return (
    // main header container
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      
      {/* application logo / title */}
      <div className="text-2xl font-bold text-amber-500">
        ShoppyGlobe
      </div>

      {/* navigation links (hidden on small screens) */}
      <nav className="space-x-6 hidden md:flex">
        <a href="/" className="hover:text-amber-400">Home</a>
        <a href="/products" className="hover:text-amber-400">Products</a>
        <a href="/cart" className="hover:text-amber-400">Cart</a>
        <a href="/checkout" className="hover:text-amber-400">Checkout</a>
      </nav>

      {/* mobile menu icon (for future use) */}
      <div className="md:hidden">
        <button>☰</button>
      </div>
    </header>
  );
}

export default Header;
