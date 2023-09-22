import { Link } from "react-router-dom";
import styles from "./ProductCart.module.css";


import img1 from '../img/1.jpeg';
import img2 from '../img/2.jpeg';
import img3 from '../img/3.jpeg';
import img4 from '../img/5.jpeg';

const imgs = [img1,img2,img3,img4]


function ProductCart(props) {
  return (
    <li className={styles.cart} key={props.product.id}>
      <img className={styles.cartImg} src={imgs[props.img]} alt="1"></img>
      <p className={styles.cartTitle}>{props.product.title}</p>
      <span className={styles.cartPrice}>Price: ${props.product.price} </span>
      <Link className={styles.cartBtn} to={`product/${props.product.id}`}>More Details</Link>
    </li>
  );
}

export default ProductCart;
