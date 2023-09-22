import { Form, redirect, useSearchParams } from "react-router-dom";
import styles from "./Login.module.css";

function OtpPage() {
  const [searchParams] = useSearchParams();
  const otpCode = searchParams.get("otp");
  console.log(searchParams.get("mobile"));

  return (
    <div className={styles.formSection}>
      <Form method="post" className={styles.form}>
        <p>
          <label className={styles.formLabel}>Code</label>
          <input
            id="code"
            type="text"
            name="code"
            required
            className={styles.formInp}
          ></input>
        <button className={styles.formBtn}>Enter Code</button>
        </p>
        <p>your otp code is: {otpCode}</p>
      </Form>
    </div>
  );
}

export default OtpPage;

export async function action({ request }) {
  console.log("local" + localStorage.getItem("otp"));
  //TODO
  const searchParams = new URL(request.url).searchParams;
  const phoneNumber = searchParams.get("mobile");


  const formData = await request.formData();
  const otpCode = formData.get("code");

  const response = await fetch("http://localhost:5000/user/check-otp", {
    method: "POST",
    headers: {
      accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `mobile=${phoneNumber}&code=${otpCode}`,
  });

  const data = await response.json();
  // Handle the response data
  if (!response.ok) {
    console.log("errorrrr");
  } else {
    const token = data.data.accessToken;
    const role = data.data.role
    localStorage.setItem("role", role)
    localStorage.setItem("token", token);
    console.log(data.data.accessToken);
    return redirect("/");
  }
}
