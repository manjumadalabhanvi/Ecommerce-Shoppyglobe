import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-blue-800 text-3xl font-bold">
          Welcome to ShoppyGlobe!
        </h1>
      </main>
      <ProductList/>
    </div>
  );
}

export default App;
