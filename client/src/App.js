import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/players`)
      //convert to json file
      .then(initialRes => initialRes.json())
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <h2>component here</h2>
      </div>
    );
  }
}

export default App;
