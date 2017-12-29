# react-from-zero
Learning react simple step by step with the default documentation.
### Adding Lifecycle Methods to a Class
The componentDidMount() hook runs after the component output has been rendered to the DOM. This is called “mounting” in React.
```JavaScript

componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

```

The componentWillUnmount() hook runs when some component in the DOM was removed. This is called “unmounting” in React.
```JavaScript

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

```

More info: [State and Lifecycle - Reactjs.org ](https://reactjs.org/docs/state-and-lifecycle.html)
