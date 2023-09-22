import { Form, redirect } from "react-router-dom";

import styles from "./Login.module.css";

function LoginPage() {
  return (
    <div className={styles.formSection}>
      <Form method="post" className={styles.form}>
        <p>
          <label className={styles.formLabel}>Phone Number</label>
          <input
            id="phonenumber"
            type="text"
            name="phonenumber"
            required
            className={styles.formInp}
          ></input>
          <button className={styles.formBtn}>Login</button>
        </p>
      </Form>
    </div>
  );
}

export default LoginPage;

export async function action({ request }) {


  const formData = await request.formData();
  const phoneNumber = formData.get("phonenumber");
  console.log(phoneNumber);
  localStorage.setItem("phonenumber", phoneNumber);

  const response = await fetch("http://localhost:5000/user/get-otp", {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      mobile: phoneNumber,
    }),
  });

  const data = await response.json();
  // Handle the response data
  if (!response.ok) {
    console.log("error: " + JSON.stringify(response));
  } else {
    localStorage.setItem("otp", data.data.code);
    const otp = localStorage.getItem("otp");
    return redirect(`/otp?otp=${otp}&mobile=${phoneNumber}`);
  }
}
