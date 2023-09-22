import { Form } from "react-router-dom";
import styles from './Home.module.css'


function EditProductPage() {
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
              id="title"
              type="text"
              name="title"
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
              id="title"
              type="file"
              name="title"
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

export default EditProductPage;


export async function action({ request }) {


  const formData = 5
    
  
    try {
      const response = await fetch('http://localhost:5000/admin/products/add', {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIwOTM2NTQxMjY0OSIsImlhdCI6MTY5NTM3MTI3MCwiZXhwIjoxNjk3MDk5MjcwfQ.ojexYkEO3YQmGmxmkZk4QNBBfBHQkQLjk2V0HdyuBtU',
        },
        body: formData,
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
  
