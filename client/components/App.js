import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

componentWillMount () {
  $.get('/test', (data) => {
    this.setState({
      photos: [data]
    })
  })
}



  render() {
    return (
      <div className="App">
        {/* {this.state.photos[0]} */}
      </div>
    );
  }
}

export default App;
