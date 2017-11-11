import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import LinearProgress from 'material-ui/LinearProgress';
import style from '../style/app.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [{title: '',
                farm: '',
                server: '',
                id: '',
                secret: ''
              }],
     completed: 0
    };
    this.getSearchResult = this.getSearchResult.bind(this);
  }

requestToServer (searchRequest) {
  $.get('/test', {search: searchRequest}, (data) => {
    this.setState({
      photos: data
    })
  })
}

componentWillMount (searchRequest) {
  this.requestToServer('dogs');
}

getSearchResult (searchRequest) {
  this.requestToServer(searchRequest);
  this.setState({
    completed: 0
  }, () => {
    Promise.resolve(this.componentWillUnmount())
    .then(() => {
      this.componentDidMount();
    })
  })
}


componentDidMount() {
  this.timer = setTimeout(() => this.progress(50), 1000);
}

componentWillUnmount() {
  clearTimeout(this.timer);
}

progress(completed) {
  if (completed > 100) {
    this.setState({completed: 100});
  } else {
    this.setState({completed});
    const diff = Math.random() * 20;
    this.timer = setTimeout(() => this.progress(completed + diff), 1000);
  }
}



  render() {

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 700,
        height: 650,
        overflowY: 'auto',
      },
    };

    return (
      <MuiThemeProvider>
        {this.state.completed < 100 &&          
          <LinearProgress mode="determinate" value={this.state.completed} />
        }
        <div className={style.App}>
          <GridList
           cellHeight={180}
           style={styles.gridList}
         >
           {this.state.photos.map((photo, index) => (
             <GridTile
               key={index}
               title={photo.title}
             >
               <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
             </GridTile>
           ))}
         </GridList>
         <Sidebar getSearchResult={this.getSearchResult}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
