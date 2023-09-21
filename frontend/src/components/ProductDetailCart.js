import styles from "./ProductDetailCart.module.css";
import shoe from "../img/sp.webp";

function ProductDetailCart(props) {
  return (
    <section className={styles.productSection}>
      <div className={styles.productDetails}>
        <img className={styles.productImg} src={shoe}></img>
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{props.product.title}</h1>
          <span className={styles.productPrice}>${props.product.price}</span>

          <h2 className={styles.productDesc}>Description</h2>
          <p>{props.product.desc}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailCart;
