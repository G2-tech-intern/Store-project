import styles from "./ProductCart.module.css";


import MyImage from './img.jpeg';


function ProductCart(props) {
  return (
    <li className={styles.cart}>
      <img className={styles.cartImg} src={MyImage}></img>
      <p>{props.product.title}</p>
      <span>price: {props.product.price}</span>
    </li>
  );
}

export default ProductCart;
