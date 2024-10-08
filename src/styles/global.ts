import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: 0;
  list-style-type: none;
  background-size: cover;
}
body, input, button{
  font-family: "Inter", sans-serif;
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight: 500;
}
`;
