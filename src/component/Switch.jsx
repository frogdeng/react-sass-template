import React, { Component } from 'react';



class Switch extends Component {
  state={
    go: false
  }
  onClick=()=>{
    this.setState(
      (currentState)=>({go: !currentState.go})
    )
  }

render() {
    this.state.go ? (document.body.style.backgroundColor = "rgb(186, 212, 176)") : (document.body.style.backgroundColor = "rgb(208, 229, 255)")
    return (
      <div className="">
        <header className="App-header">
          <h1 className="App-title">SUPER FROG</h1>
        </header>
        <div className="switch_element">
          on
          <div className="switch_wrapper" onClick={this.onClick}>
            <div className={"ball "+ (this.state.go ? " switch-on" : "switch-off")}></div>
          </div>
          off
        </div>


      </div> 
    );
  }
}


export default Switch;
