import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";

import styles from "./ProductList.module.css";

const products = [
  {
    id: 1,
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
    id: 2,
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
    id: 3,
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
    id: 4,
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
    id: 5,
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
];
console.log(products[0])

function ProductList() {
  return (
    <>
      <section className={styles.container}>
        <div>
          <ul className={styles.productList}>
            <ProductCart product={products[0]}/>
            <ProductCart product={products[0]}/>
            <ProductCart product={products[0]}/>
            <ProductCart product={products[0]}/>
            <ProductCart product={products[0]}/>
            <ProductCart product={products[0]}/>
            <ProductCart product={products[0]}/>
            <ProductCart product={products[0]}/>

          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductList;
