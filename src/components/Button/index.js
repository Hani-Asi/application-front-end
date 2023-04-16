import styled from "@emotion/styled";

const Button = styled.button`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid transparent;
  color: #fff;
  font-weight: 600;
  display: block;
  width: 100%;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  outline: none;
  background-color: #946cee;
  box-sizing: border-box;
  cursor: pointer;

  transition: all ease 0.5s;
  .active {
    font-size: 0;
    background-color: #a53cef;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-left-color: transparent;
    animation: rotate 1.4s ease 0.5s infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(360deg);
    }
  }

  .success {
    position: relative;
    background-color: #a53cef;
    animation: bounce 0.3s ease-in;
  }
  @keyframes bounce {
    0% {
      transform: bounce(0.9);
    }
  }
  .success::before {
    content: "";
    position: absolute;
    background: url(check-solid.svg) no-repeat;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 31px;
    height: 31px;
    line-height: 31px;
    top: 8px;
  }

  &:hover {
    background-color: #b28aef;
  }
`;

export default Button;
