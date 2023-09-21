import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage, {loader as homePageLoader} from "./pages/Home";
import ProductPage, {loader as productDetailsPageLoader} from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import AdminPage from "./pages/Admin";
import LoginPage, {action as loginAction } from "./pages/Login";
import OtpPage, {action as otpAction} from "./pages/Otp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      { path: "product/:productId", element: <ProductPage />, loader: productDetailsPageLoader },
      { path: "admin", element: <AdminPage /> },
      { path: "login", element: <LoginPage />, action: loginAction},
      { path: "otp", element: <OtpPage/>, action: otpAction},

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
