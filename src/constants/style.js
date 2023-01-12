import styled from "styled-components";

const buttonStyle = `height: 100px;
background: red;
color: pink;`;

export const Button = styled.button`
  width: ${({ theme }) => theme}px;
  ${buttonStyle};
`;
