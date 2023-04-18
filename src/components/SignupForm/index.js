import GlobalStyle from "../GlobalStyle.js";
import CardFormContainer from "../CardFormContainer.js";
import CardForm from "../CardForm.js";
import CardFormTitle from "../CardFormTitle.js";
import Input from "../Input/index.js";
import InputError from "../InputError/index.js";
import Button from "../Button/index.js";
import useForm from "../../hooks/useForm.js";
import styled from "@emotion/styled";

const SignupForm = ({ onSubmit }) => {
  const { errors, isLoading, handleChange, handleSubmit } = useForm({
    initialValues: {
      name: "",
      email: "",
      userid: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validate: ({ name, email, userid, password, confirmPassword }) => {
      const newErrors = {};
      if (!name) newErrors.name = "Please enter your User Name.";
      if (!email) newErrors.email = "Please enter your Email.";
      if (!userid) newErrors.userid = "Please enter your ID.";
      if (!password) newErrors.password = "Please enter your Password.";
      if (!confirmPassword)
        newErrors.confirmPassword = "Please enter your Password.";
      if (password !== confirmPassword)
        newErrors.confirmPassword = "The password confirmation does not match.";
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
              name="name"
              placeholder="User Name"
              onChange={handleChange}
              label={"User Name"}
            />
            {errors.name && <InputError>{errors.name}</InputError>}
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              label={"Email"}
            />
            {errors.email && <InputError>{errors.email}</InputError>}
            <Input
              type="text"
              name="userid"
              placeholder="ID"
              onChange={handleChange}
              label={"ID"}
            />
            {errors.userid && <InputError>{errors.userid}</InputError>}
            <Input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleChange}
              label={"Password"}
            />
            {errors.password && <InputError>{errors.password}</InputError>}
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              autoComplete="off"
              onChange={handleChange}
              label={"Confirm password"}
            />
            {errors.confirmPassword && (
              <InputError>{errors.confirmPassword}</InputError>
            )}
            <Other>
              <Button type="submit" disabled={isLoading}>
                <span className="button__text">Sign up</span>
              </Button>
            </Other>
          </form>
        </CardForm>
        <CardForm>
          <p>
            Have an account? <Login href="./LoginForm.js">Log in</Login>
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

const Login = styled.a`
  color: #a53cef;
  font-weight: 700;
  text-decoration: none;
`;

export default SignupForm;
