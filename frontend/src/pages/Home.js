

import { useLoaderData } from "react-router-dom";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

import styles from "./Home.module.css";

function HomePage() {
  const data = useLoaderData();

  // console.log(data.data.products)

  return (
    <>
      <main className={styles.container}>
        {/* <img src={`http://localhost:5000/${data.data.products[0].images[0]}`}></img> */}
        <Hero />
        <h1>Products :</h1>
        <ProductList products={data.data.products} />
      </main>
    </>
  );
}

export default HomePage;

export async function loader({request, params}) {
    const response = await fetch('http://localhost:5000/admin/products/list')

    if(!response.ok) {
    console.log("erorrr")
    } else {
      const resData = await response;
      return resData;
    }
}
