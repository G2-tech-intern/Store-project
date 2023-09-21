import { Link } from "react-router-dom";
import styles from "./ProductCart.module.css";


import MyImage from './img.jpeg';


function ProductCart(props) {
  return (
    <li className={styles.cart} key={props.product.id}>
      <img className={styles.cartImg} src={MyImage}></img>
      <p>{props.product.title}</p>
      <span>price: {props.product.price}</span>
      <Link to={`product/${props.product.id}`}>details</Link>
    </li>
  );
}

export default ProductCart;
