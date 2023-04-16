import LoginForm from "../components/LoginForm/index.js";

export default {
  title: "Component/LoginForm",
  component: LoginForm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
};

export const Default = (args) => {
  return <LoginForm {...args} />;
};
