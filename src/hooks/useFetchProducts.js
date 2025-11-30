import { useState, useEffect } from "react";

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]); // store product list
  const [loading, setLoading] = useState(true); // loading indicator
  const [error, setError] = useState(null);     // error message if fetch fails

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.products); // save products
      } catch (err) {
        setError(err.message); // save error
      } finally {
        setLoading(false); // stop loading
      }
    };

    fetchProducts(); // call the async function
  }, []); // runs only once when component mounts

  return { products, loading, error }; // expose to any component
};
