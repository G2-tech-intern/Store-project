import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage, {loader as homePageLoader} from "./pages/Home";
import ProductPage, {loader as productDetailsPageLoader} from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import AdminPage, {loader as adminPageLoader} from "./pages/Admin";
import LoginPage, {action as loginAction } from "./pages/Login";
import OtpPage, {action as otpAction} from "./pages/Otp";
import {loader as tokenLoader} from './util/auth.js'
import {action as logoutAction} from './pages/Logout'
import AddProductPage, {action as addAction} from "./pages/AddProduct";
import EditProductPage from "./pages/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    id: 'root',
    element: <RootLayout />,
    loader: tokenLoader, 
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage />, loader: homePageLoader },
      {path: "product/:productId", children:[
        { path: "", element: <ProductPage />, loader: productDetailsPageLoader },
        { path: "edit", element: <EditProductPage/>}
      ]},
      { path: "admin", element: <AdminPage />, loader: adminPageLoader },
      { path: "login", element: <LoginPage />, action: loginAction},
      { path: "otp", element: <OtpPage/>, action: otpAction},
      { path: "logout", action: logoutAction},
      { path: "add", element: <AddProductPage/>, action: addAction}

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
