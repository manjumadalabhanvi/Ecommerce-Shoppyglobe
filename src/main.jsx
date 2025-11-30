import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import store from "./redux/store.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages & Components
import Home from "./pages/Home.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";

// ROUTES: App acts as layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Layout
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductList /> },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
