import SignupForm from "../components/SignupForm/index.js";

export default {
  title: "Component/SignupForm",
  component: SignupForm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
  },
};

export const Default = (args) => {
  return <SignupForm {...args} />;
};
