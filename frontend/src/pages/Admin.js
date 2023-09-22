import "./Admin.css";

function AdminPage() {
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
        <div className="product">
          <p className="id">1</p>
          <p className="title">shoe</p>
          {/* <p className="desc">this is shoe</p> */}
          <p className="price">12$</p>
          <p className="count">100</p>
          <div className="buttons">
            <button className="view-btn">view</button>
            <button className="edit-btn">edit</button>
            <button className="remove-btn">remove</button>
          </div>
        </div>
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
