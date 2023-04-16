import InputError from "../components/InputError/index.js";

export default {
  title: "Component/InputError",
  component: InputError,
};

export const Default = (args) => {
  return <InputError {...args} />;
};
