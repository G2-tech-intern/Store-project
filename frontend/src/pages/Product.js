import { useLoaderData } from "react-router-dom";

import styles from "./Product.module.css";

import ProductDetailCart from "../components/ProductDetailCart";

function ProductPage() {
  const data = useLoaderData();

  // console.log(data.data.product);

  return <ProductDetailCart product={data.data.product} />;
}

export default ProductPage;

export async function loader({ params }) {
  const id = params.productId;
  const response = await fetch("http://localhost:5000/admin/products/" + id);

  if (!response.ok) {
    console.log("there is an error");
  } else {
    return response;
  }
}
