// src/components/ProductList.jsx
import React from 'react'
import ProductItem from './ProductItem'
import { useFetchProducts } from '../hooks/useFetchProducts'

function ProductList() {
  // Fetch products using custom hook
  const { products, loading, error } = useFetchProducts()

  // Handle adding product to cart

  const handleAddToCart = (product) => {
    console.log('Add to cart clicked for:', product.title)
  }

  // Loading and error handling
  if (loading) return <p className="p-6 text-center">Loading products...</p>
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  )
}

export default ProductList
