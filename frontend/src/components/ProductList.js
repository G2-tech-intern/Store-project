import ProductCart from "./ProductCart";

import styles from "./ProductList.module.css";

const products = [
  {
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
    title: "product1",
    description:
      "this is a product description and its tells all about product that make you to buy its please buy it",
    price: 50,
    img: "../../img/shoe.avif",
  },
  {
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
          <ul>
            <ProductCart product={products[0]}/>
          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductList;
