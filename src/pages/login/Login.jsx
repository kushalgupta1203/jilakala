import React from "react";
import { useState } from "react";
import FormInput from "../../components/form/forminput";
import "../../assets/styles/Login.css";
import logo from "../../assets/images/removed-logo.png";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Phone",
      type: "number",
      placeholder: "Phone number",
      errorMessage: "It should be a valid!",
      label: "Phone",
      required: true,
    },
    {
      id: 2,
      name: "otp",
      type: "number",
      placeholder: "OTP",
      label: "Otp",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
    <img className="logo-form" alt="logo" src={logo}></img>
      <div className="login-wrapper">
        
        <div className="login-main">

        
          <form>
            <h1>Login</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
