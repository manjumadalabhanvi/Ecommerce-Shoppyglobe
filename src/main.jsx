import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import store from "./redux/store.js";
import "./index.css";

// lazy load pages and main components for better performance
const Home = lazy(() => import("./pages/Home.jsx"));
const ProductList = lazy(() => import("./components/ProductList.jsx"));
const ProductDetail = lazy(() => import("./components/ProductDetail.jsx"));
const Cart = lazy(() => import("./components/Cart.jsx"));
const Checkout = lazy(() => import("./pages/Checkout.jsx"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

// application routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    
    // show custom 404 page for unknown routes
    errorElement: (
      <Suspense fallback={<p className="p-6 text-center">Loading...</p>}>
        <NotFound />
      </Suspense>
    ),

    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "order-success", element: <OrderSuccess /> },
    ],
  },
]);

// render app and wrap with redux provider and suspense
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<p className="p-6 text-center">Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
