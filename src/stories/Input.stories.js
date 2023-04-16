import Input from "../components/Input/index.js";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    input_font_size: {
      defaultValue: "12px",
      control: "number",
    },
    label_font_size: {
      defaultValue: "14px",
      control: "number",
    },
    input_font_color: {
      defaultValue: "black",
      control: "color",
    },
    label_font_color: {
      defaultValue: "black",
      control: "color",
    },
    label: {
      defaultValue: "Label",
      control: "text",
    },
    disabled: {
      defaultValue: false,
      control: "boolean",
    },
    required: {
      defaultValue: false,
      control: "boolean",
    },
  },
};

export const Default = (args) => <Input {...args} />;
