import React, {Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

class App extends Component{
  render() { 
    return(
      <React.Fragment>
        <GlobalStyle/>
        <Container>
          <Button>Hello</Button>
          <Button danger rotationTime={5}>Hello</Button>
          <Anchor href="http://www.google.com">Go to google</Anchor>
        </Container>
      </React.Fragment>
    );
  }
}

// 스타일하려는 html 요소르 럲는다.

const Container = styled.div`
  height:100vh;
  widht:100%;
  background-color:#bdc3c7;
`
const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color:${props => props.danger ? "#e74c3c" : "#2ecc71"};
  ${props => {
    if (props.danger){
      return css`animation: ${rotation} ${props.rotationTime}s linear infinite`;
    }
  }}
`;

const Anchor = styled(Button.withComponent('a'))`
  text-decoration: none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }to{
    transform: rotate(360deg);
  }
`;
export default App;
