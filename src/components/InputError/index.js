import styled, { keyframes } from "styled-components";

const errorAnimation = keyframes`
  from {
    color: red;
    transform: translateY(-14px);
  }
  to {
    transform: translateY(0);
  }
`;

const StyledError = styled.div`
  .inputError {
    position: relative;
    height: 15px;
    top: 0;
    overflow-y: hidden;
  }

  .inputError .errorText {
    font-size: 12px;
    line-height: 1;
    top: -12px;
    color: red;
    animation-duration: 1s;
    animation: ${errorAnimation} 1s;
  }
`;

const InputError = () => {
  return (
    <>
      <StyledError className="inputError">
        <StyledError className="errorText" />
      </StyledError>
    </>
  );
};

export default InputError;
