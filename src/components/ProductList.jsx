import React from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import ProductItem from "./ProductItem";

function ProductList() {
  // fetch product list using custom hook
  const { products, loading, error } = useFetchProducts();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // add selected product to cart and go to cart page
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  // show loading state while fetching products
  if (loading) {
    return <p className="p-6 text-center">Loading products...</p>;
  }

  // show error message if API call fails
  if (error) {
    return <p className="p-6 text-center text-red-500">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      
      {/* render product list */}
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
