import GlobalStyle from "../GlobalStyle.js";
import CardFormContainer from "../CardFormContainer.js";
import CardForm from "../CardForm.js";
import CardFormTitle from "../CardFormTitle.js";
import Input from "../Input/index.js";
import Button from "../Button/index.js";
import InputError from "../InputError/index.js";
import useForm from "../../hooks/useForm.js";
import "../../css/LoginForm.css";
import styled from "@emotion/styled";

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
            <Input
              type="text"
              name="userid"
              placeholder="ID"
              onChange={handleChange}
              label={"ID"}
            />
            {errors.userid && (
              <InputError>
                <div className="inputErrorText">{errors.userid}</div>
              </InputError>
            )}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange}
              label={"Password"}
            />
            {errors.password && (
              <InputError>
                <div className="inputErrorText">{errors.password}</div>
              </InputError>
            )}
            <Other>
              <Button type="submit" disabled={isLoading}>
                <span className="button__text">Log in</span>
              </Button>
              <Forgot href="./ForgotPassword.js">Forgot password?</Forgot>
            </Other>
          </form>
        </CardForm>
        <CardForm>
          <p>
            Don't have an account?{" "}
            <Signup href="./SignupForm/index.js">Sign up</Signup>
          </p>
        </CardForm>
      </CardFormContainer>
    </>
  );
};

const Other = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Forgot = styled.a`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 13px;
  color: gray;
  text-decoration: none;
`;

const Signup = styled.a`
  color: #a53cef;
  font-weight: 700;
  text-decoration: none;
`;

export default LoginForm;
