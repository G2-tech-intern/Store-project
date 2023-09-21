import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage, {loader as homePageLoader} from "./pages/Home";
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
      { index: true, element: <HomePage />, loader: homePageLoader },
      { path: "product/:productId", element: <ProductPage /> },
      { path: "admin", element: <AdminPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
