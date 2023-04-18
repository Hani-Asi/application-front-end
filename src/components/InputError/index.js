import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const errorAnimation = keyframes`
  from {
    color: white;
    transform: translateY(-12px);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledError = styled.div`
  .inputError {
    height: 12px;
    overflow-y: hidden;
    margin-left: 8px;
    box-sizing: border-box;
  }
`;

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
  line-height: 1;
  display: flex;
  align-items: center;
  animation-name: ${errorAnimation};
  animation-duration: 1s;
`;

const InputError = ({ children }) => {
  return (
    <>
      <StyledError className="inputError">
        <ErrorText className="errorText">{children}</ErrorText>
      </StyledError>
    </>
  );
};

export default InputError;
