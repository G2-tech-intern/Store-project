import styles from "./ProductCart.module.css";

function ProductCart(props) {
  return (
    <li>
    <img src="./Untitled.jpeg"></img>
      <p>{props.product.title}</p>
      <span>price: {props.product.price}</span>
    </li>
  );
}

export default ProductCart;
