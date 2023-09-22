import { Form } from "react-router-dom";
import styles from './Home.module.css'

import { getAuthToken } from "../util/auth";
function AddProductPage() {
  return (
    <section>
      <div>
        <Form method="post" className={styles.form}>
          <p>
            <label className={styles.formLabel}>Title</label>
            <input
              id="title"
              type="text"
              name="title"
              required
              className={styles.formInp}
            ></input>
            <label className={styles.formLabel}>Description</label>
            <textarea
              id="desc"
              type="text"
              name="desc"
              required
              className={styles.formInp}
            ></textarea>
            <label className={styles.formLabel}>Price</label>
            <input
              id="price"
              type="text"
              name="price"
              required
              className={styles.formInp}
            ></input>
            <label className={styles.formLabel}>Count</label>
            <input
              id="count"
              type="number"
              name="count"
              required
              className={styles.formInp}
            ></input>
            <label className={styles.formLabel}>photo</label>
            <input
              id="photo"
              type="file"
              name="photo"
              accept="image/*"
              required
              className={styles.formInp}
            ></input>

            <button className={styles.formBtn}>Login</button>
          </p>
        </Form>
      </div>
    </section>
  );
}

export default AddProductPage;

export async function action({ request }) {

  const formData = await request.formData();
  const title = formData.get("title");
  const desc = formData.get("desc");
  const price = formData.get("price");
  const count = formData.get("count");
  const images = formData.get("images");
  
  const sendData = `title=${title}&desc=${desc}&price=${price}&count=${count}&images=@1.png;type=image/png`

  console.log(sendData)
  const data = {
    title: title,
    desc: desc,
    price: price,
    count:count,
    images:'images=@1.png;type=image/png'
  }


  const token = getAuthToken();
  
  try {
    const response = await fetch('http://localhost:5000/admin/products/add', {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // Handle successful response
      console.log('Product added successfully');
    } else {
      // Handle error response
      console.log('Error adding product');
    }
  } catch (error) {
    console.log('Error:', error);
  }
}
