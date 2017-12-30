
import React from 'react';
class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isToggleOn: true,
        isHovered:false,
        isMouseOut:true
      };
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      this.handleHover=this.handleHover.bind(this);
      this.handleOut=this.handleOut.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
    handleHover(){
      this.setState(prevState => ({
          isHovered: !prevState.isHovered
      }));
    }
    handleOut(){
      this.setState(prevState => ({
          isMouseOut: !prevState.isMouseOut
      }));
    }
    render() {
      var btnClass = this.state.isHovered ? "hovered" : "";
      btnClass+=this.state.isMouseOut ? "" : "mouse_out";
      return (
        <button onClick={this.handleClick}
         className={btnClass+" btn"} 
         onMouseOver={this.handleHover}
         onMouseOut={this.handleOut} >
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }
  
  export default Toggle;
  
  