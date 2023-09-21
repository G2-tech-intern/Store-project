import { useParams } from "react-router-dom";

import styles from "./Product.module.css"
import shoe from "./s.png";

function ProductPage() {
  const params = useParams();

  return (
    <section className={styles.productSection}>
      <div className={styles.productDetails}>
        <img className={styles.productImg} src={shoe}></img>
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>title</h1>
          <span className={styles.productPrice}>price</span>
        </div>
        <div className={styles.productDscription}>
          <h2>Description</h2>
          <p>
            lorem dfslkdf dsfsla fsdflkkd kkk dsfs kdsfkls jfdslksjfl jjjj
            sdfmvmv mm aadf sdfslkl;sdf jlksdfj jjfadfjlkaf
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
