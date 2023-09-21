import { Form, redirect, useSearchParams } from "react-router-dom";

function OtpPage() {
  const [searchParams] = useSearchParams();
  const otpCode = searchParams.get("otp");
  console.log(searchParams.get("mobile"));

  return (
    <div>
      <Form method="post">
        <p>
          <label>Code</label>
          <input id="code" type="text" name="code" required></input>
        </p>
        <button>Login</button>
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

  //   if (mode !== 'login' && mode !=='signup') {
  //     throw json({message: 'unsopported mode '}, {status: 422})
  //   }

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
    localStorage.setItem('token', token)
    console.log(data.data.accessToken);
    return redirect("/");
  }
}
