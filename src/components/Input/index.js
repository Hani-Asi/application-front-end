import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  div {
    display: block;
    margin: 10px 0;
    position: relative;
    width: 100%;
    text-overflow: ellipsis;
  }

  input {
    padding: 9px 0px 7px 9px;
    width: 16rem;
    height: 1.2rem;
    outline: none;
    background: #fafafa;
    border-radius: 3px;
    border: 1px solid #efefef;
  }

  label {
    position: absolute;
    pointer-events: none;
    left: 10px;
    padding-bottom: 15px;
    line-height: 6px;
    transform: translateY(10px);
    transition: all ease-out 0.1s;
    color: #999;
    padding-top: 6px;
  }
  input::placeholder {
    visibility: hidden;
  }
  input:not(:placeholder-shown) + label {
    transform: translateY(0);
    font-size: 11px;
  }
  input:not(:placeholder-shown) {
    padding-top: 14px;
    padding-bottom: 2px;
  }
`;

const Input = ({
  input_font_size,
  label_font_size,
  input_font_color,
  label_font_color,
  label,
  required = false,
  disabled = false,
  className,
  wrapperProps,
  ...props
}) => {
  const StyledInput = {
    fontSize: typeof input_font_size === "number" ? input_font_size : undefined,
    color: label_font_color,
  };
  const StyledLabel = {
    fontSize: typeof label_font_size === "number" ? label_font_size : undefined,
    color: input_font_color,
  };

  return (
    <>
      <GlobalStyle />
      <div {...wrapperProps}>
        <input
          className={
            typeof input_font_size === "string"
              ? `Text--size-${input_font_size}`
              : undefined
          }
          placeholder={label}
          fontSize={input_font_size}
          fontcolor={input_font_color}
          required={required}
          disabled={disabled}
          {...props}
          style={{ ...StyledInput }}
        />
        <label
          className={
            typeof label_font_size === "string"
              ? `Text--size-${label_font_size}`
              : undefined
          }
          fontSize={label_font_size}
          fontcolor={label_font_color}
          style={{ ...StyledLabel }}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
