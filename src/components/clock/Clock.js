import React from 'react';
class Clock extends React.Component {
    /**
     * In applications with many components, it’s very important to
     *  free up resources taken by the components when they are destroyed.
     * 
     * We want to set up a timer whenever the Clock is rendered 
     * to the DOM for the first time. This is called “mounting” in React.
     * 
     * We also want to clear that timer whenever
     *  the DOM produced by the Clock is removed. This is 
     * called “unmounting” in React.
     * @param {*} props 
     */
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    /**
     * These methods are called “lifecycle hooks”  
     */
    componentDidMount() {
        /** 
        * The componentDidMount() hook runs after the component output has 
        * been rendered to the DOM. 
        **/
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2>The Time now is: {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

export default Clock;