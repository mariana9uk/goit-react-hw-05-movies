import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
body {
   
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
ul {
    list-style: none;
    margin:0;
   padding-left: 20px;
}
a {
    text-decoration: none;
}
a.active{color: blue;}
p{
    margin:0 auto;
}
h1{
  padding-left: 20px;
}`;
