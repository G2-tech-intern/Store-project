import { Form, json, redirect } from "react-router-dom";


function LoginPage() {
  return (
    <div>
      <Form method="post">
        <p>
          <label>Phone Number</label>
          <input
            id="phonenumber"
            type="text"
            name="phonenumber"
            required
          ></input>
        </p>
        <button>Login</button>
      </Form>
    </div>
  );
}

export default LoginPage;

export async function action({ request }) {
  //TODO
  //   const searchParams = new URL(request.url).searchParams;
  //   const mode = searchParams.get("mode") || "login";

  //   if (mode !== 'login' && mode !=='signup') {
  //     throw json({message: 'unsopported mode '}, {status: 422})
  //   }

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
    console.log("errorrrr");
  } else {

      localStorage.setItem("otp", data.data.code );
      const otp = localStorage.getItem('otp')
    return redirect(`/otp?otp=${otp}&mobile=${phoneNumber}`)
  }

}


