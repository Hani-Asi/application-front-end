import { createGlobalStyle } from "styled-components";
import GlobalStyle from "./GlobalStyle.js";
import CardFormContainer from "./CardFormContainer.js";
import CardForm from "./CardForm.js";
import CardFormTitle from "./CardFormTitle.js";
import Input from "./Input.js";
import Button from "./Button.js";
import useForm from "../hooks/useForm.js";
import "../css/LoginForm.css";

const LoginForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      userid: "",
      password: "",
    },
    onSubmit,
    validate: ({ userid, password }) => {
      const newErrors = {};
      if (!userid) newErrors.userid = "Please enter your ID.";
      if (!password) newErrors.password = "Please enter your Password.";
      return newErrors;
    },
  });

  return (
    <>
      <GlobalStyle />
      <CardFormContainer>
        <CardForm>
          <form onSubmit={handleSubmit}>
            <CardFormTitle>essential ;</CardFormTitle>
            <div className="field">
              <Input
                type="text"
                name="userid"
                placeholder="ID"
                onChange={handleChange}
              />
              <label htmlFor="ID">ID</label>
            </div>
            {errors.userid && (
              <div className="inputError">
                <div className="inputErrorText">{errors.userid}</div>
              </div>
            )}
            <div className="field">
              <Input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
              />
              <label htmlFor="Password">Password</label>
            </div>
            {errors.password && (
              <div className="inputError">
                <div className="inputErrorText">{errors.password}</div>
              </div>
            )}
            <div className="other">
              <button type="submit" disabled={isLoading} className="button">
                <script>
                  const btn = document.querySelector(".button");
                  btn.classList.toggle("button--loading");
                  //btn.classList.add("button--loading");
                  //btn.classList.remove("button--loading");
                </script>
                <span className="button__text">Log in</span>
              </button>
              <a className="forgot" href="./ForgotPassword.js">
                Forgot password?
              </a>
            </div>
          </form>
        </CardForm>
        <CardForm>
          <p>
            Don't have an account?{" "}
            <a className="signup" href="./SignupForm.js">
              Sign up
            </a>
          </p>
        </CardForm>
      </CardFormContainer>
    </>
  );
};

export default LoginForm;
