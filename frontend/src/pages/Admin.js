import { useLoaderData, Link } from "react-router-dom";

import "./Admin.css";
import { getAuthToken } from "../util/auth";

function AdminPage() {
  const data = useLoaderData();

  const handleDelete = async (productId) => {
    const token = getAuthToken();
    console.log(token);

    fetch(`http://localhost:5000/admin/products/remove/${productId}`, {
      method: "DELETE",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log("Product deleted successfully");
          window.location.reload();
        } else {
          // Handle error response
          console.log("Error deleting product");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
    <div className="main">
      <button className="btn">add product</button>
      <div className="products">
        <div className="product header">
          <p className="id">id</p>
          {/* <img src="../backend/public/uploads/" alt="" className="img"></img> */}
          <p className="title">title</p>
          {/* <p className="desc">description</p> */}
          <p className="price">price</p>
          <p className="count">count</p>
          <div className="buttons"></div>
        </div>
        {/* 
        {
              props.products.map((product) => {
                return <ProductCart product={product} key={product.id}/>
              })
            } */}

        {data.data.products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <p className="id">{product.id}</p>
              <p className="title">{product.title}</p>
              {/* <p className="desc">this is shoe</p> */}
              <p className="price">{product.price}</p>
              <p className="count">{product.count}</p>
              <div className="buttons">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(product.id)}
                >
                  delete
                </button>
                <button className="edit-btn">edit</button>
                <Link to={`/product/${product.id}`}>show</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AdminPage;

export async function loader({ request, params }) {
  const response = await fetch("http://localhost:5000/admin/products/list");

  if (!response.ok) {
    console.log("error loading");
  } else {
    const resData = await response;
    return resData;
  }
}
