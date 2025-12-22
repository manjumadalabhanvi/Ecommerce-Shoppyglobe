import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import store from "./redux/store.js";
import "./index.css";

// Pages
import Home from "./pages/Home.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
import NotFound from "./pages/NotFound.jsx";

// Components
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },

      // ✅ THIS ROUTE WAS MISSING / WRONG BEFORE
      { path: "order-success", element: <OrderSuccess /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<p className="p-6 text-center">Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
