import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{title: '',
                farm: '5',
                server: '4540',
                id: '26541190369',
                secret: '4162e5509e'
              }]
    };
  }

componentWillMount () {
  $.get('/test', (data) => {
    this.setState({
      photos: data
    }, () => {console.log(this.state.photos[0].title)})
  })
}

// id: '26541190369',
//    owner: '78618238@N04',
//    secret: '4162e5509e',
//    server: '4540',
//    farm: 5,
//    title: '',
//    ispublic: 1,
//    isfriend: 0,
//    isfamily: 0 }

  render() {
    return (
      <div className="App">
        {this.state.photos.map((photo, index) =>
          <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
        )}
      </div>
    );
  }
}

export default App;
