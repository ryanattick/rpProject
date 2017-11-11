import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import LinearProgress from 'material-ui/LinearProgress';
import AppBar from 'material-ui/AppBar';
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
     completed: 0,
     searchRequest: 'Dogs',
     pastSearches: []
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
  this.requestToServer(this.state.searchRequest);
}

getSearchResult (searchRequest) {
  searchRequest = searchRequest.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})

  this.requestToServer(searchRequest);
  this.state.pastSearches.push(searchRequest);
  this.setState({
    completed: 0,
    searchRequest: searchRequest
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
        width: 750,
        height: 700,
        overflowY: 'auto',
      },
    };

    return (
      <MuiThemeProvider>
        <AppBar
          title="Coding Challenge"
          showMenuIconButton={false}
          style={{padding: '30px', background: 'red'}}
        />
        {this.state.completed < 100 &&
          <LinearProgress mode="determinate" value={this.state.completed} />
        } <br/>
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
         <Sidebar searchRequest={this.state.searchRequest} pastSearches={this.state.pastSearches} getSearchResult={this.getSearchResult}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
