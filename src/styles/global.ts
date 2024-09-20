import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

// default 
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline: 0;
  list-style-type: none;
  background-size: cover;
scroll-behavior: smooth;
}
body, input, button{
  font-family: "Inter", sans-serif;

  background: #fefefe;
}
h1,h2,h3,h4,h5,h6,strong{
  font-weight: 500;
}
:root{
  --cor-default: red;
}
`;
