import React from "react";
import "./App.css";

//components
import Players from "./components/Players";

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
        <Players data={this.state.data} />
      </div>
    );
  }
}

export default App;
