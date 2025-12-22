import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-amber-400 mb-2">
            ShoppyGlobe
          </h2>
          <p className="text-sm text-gray-400">
            Your trusted online shopping platform for quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-amber-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-amber-400">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-amber-400">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm">Email: support@shoppyglobe.com</p>
          <p className="text-sm">Phone: +91 98765 43210</p>
          <p className="text-sm">Location: India</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
