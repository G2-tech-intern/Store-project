import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import AdminPage from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "product/:productId", element: <ProductPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
