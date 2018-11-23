import React, { Component } from 'react';
import Switch from './component/Switch';
import ThinkingReact from './component/ThinkingReact';
import './sass/module.sass';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Switch/> */}
        <ThinkingReact/>
      </div>
     
    );
  }
}

export default App;
