import React, {Component, Fragment } from 'react';
import "./App.css";

class App extends Component{
  render() { 
    return(
      <Fragment>
        <Button danger />
        <Button />
      </Fragment>
    );
  }
}

const Button = ({danger}) => (
  <Button className={danger ? "button button--danger" : "button button--success" }>
    Hello
  </Button>
);
export default App;
