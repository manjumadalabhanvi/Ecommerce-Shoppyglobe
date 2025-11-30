import { useState, useEffect } from "react";

export const useFetchProduct = (id) => {
  const [product, setProduct] = useState(null); // store single product
  const [loading, setLoading] = useState(true); // loading indicator
  const [error, setError] = useState(null);     // error message

  useEffect(() => {
    if (!id) return; // if no id, do nothing

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // dependency array includes id

  return { product, loading, error }; // expose data to component
};
