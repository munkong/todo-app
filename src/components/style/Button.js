import styled from "styled-components";

const Button = styled.button`
  font-family: ${props => props.theme.fontFamily};
  display: inline-block;
  padding: 0.2em 0.8em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 0.5em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 600;
  font-size: 12px;
  color: #f5ee03;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  text-align: center;
  transition: all 0.2s;
  background-color: #032091;

  &:hover {
    background-color: #1e8307;
  }
;
`
export default Button
