import { Link } from "react-router-dom";
import ProductCart from "./ProductCart";

import styles from "./ProductList.module.css";


// console.log(products[0])

function ProductList(props) {
  console.log(props.products[0].id)
  return (
    <>
      <section className={styles.container}>
        <div>
          <ul className={styles.productList}>
            {
              props.products.map((product) => {
                console.log([product])
                return <ProductCart product={product} key={product.id}/>
              })
            }

          </ul>
        </div>
      </section>
    </>
  );
}

export default ProductList;
