import Button from "../components/Button/index.js";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

export const Default = (args) => {
  return <Button {...args}>Log in</Button>;
};
