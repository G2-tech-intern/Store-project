import { Link } from "react-router-dom";
import styles from "./ProductCart.module.css";


import MyImage from '../img/22.jpg';


function ProductCart(props) {
  return (
    <li className={styles.cart} key={props.product.id}>
      <img className={styles.cartImg} src={MyImage} alt="1"></img>
      <p className={styles.cartTitle}>{props.product.title}</p>
      <span className={styles.cartPrice}>Price: ${props.product.price} </span>
      <Link className={styles.cartBtn} to={`product/${props.product.id}`}>More Details</Link>
    </li>
  );
}

export default ProductCart;
