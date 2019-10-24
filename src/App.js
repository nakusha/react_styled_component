import React, {Component, Fragment } from 'react';
import styled, { createGlobalStyle, css, keyframes, ThemeProvider } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

// 스타일하려는 html 요소르 럲는다.
const awsomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),  1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Container = styled.div`
  height:100vh;
  widht:100%;
  background-color:#bdc3c7;
  ${Card} {
    background-color: blue;
  }
`;

const Input = styled.input.attrs({
  required: true
})`
  border-radius:5px;
  border:none;
  ${awsomeCard}
`;

const Card = styled.div`
  background-color:white;
`

const Button = styled.button`
  border-radius:30px;
  padding:25px 15px;
  background-color:${props => props.theme.successColor};
`

class App extends Component{
  render() { 
    return(
      <React.Fragment>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

const Form = () => (
  <Card>
    <Button>Hello</Button>
  </Card>
)
/*
<Button>Hello</Button>
<Button danger rotationTime={5}>Hello</Button>
<Anchor href="http://www.google.com">Go to google</Anchor>
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
*/
export default App;
