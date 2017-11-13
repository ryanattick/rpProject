import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import style from '../style/App.css';

//Components
import Sidebar from './Sidebar.js';
import Favorites from './Favorites.js';
import SearchedPhotos from './SearchedPhotos.js';

//Material-UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import LinearProgress from 'material-ui/LinearProgress';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';




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
     page: 'main',
     completed: 0,
     searchRequest: 'Dogs',
     pastSearches: [],
     favorites: [],
    };
    this.getSearchResult = this.getSearchResult.bind(this);
    this.handleRemovePastSearch = this.handleRemovePastSearch.bind(this);
    this.pastSearchClick = this.pastSearchClick.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.goToFavorites = this.goToFavorites.bind(this);
    this.backToMain = this.backToMain.bind(this);
    this.deleteFromFavorites = this.deleteFromFavorites.bind(this);
  }


//Search Functions
requestToServer (searchRequest) {
  $.get('/test', {search: searchRequest}, (data) => {
    this.setState({
      photos: data
    }, () => {
      this.cachePastSearchData(searchRequest);
    })
  })
}

componentWillMount (searchRequest) {
  this.requestToServer(this.state.searchRequest);
}

cachePastSearchData (searchRequest) {
  var alreadyContainsSearchTerm = false;
  for (var i = 0; i < this.state.pastSearches.length; i++) {
    if (this.state.pastSearches[i].searchTerm === searchRequest) {
      alreadyContainsSearchTerm = true;
    }
  }
  if (!alreadyContainsSearchTerm && this.state.photos.length > 0) {
    this.state.pastSearches.push({searchTerm: searchRequest, photos: this.state.photos});
  }
}

getSearchResult (searchRequest) {
  searchRequest = searchRequest.replace(/\w\S*/g, (txt) => {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})
  this.requestToServer(searchRequest);
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

handleRemovePastSearch (searchToRemove) {
  var lastElement;
  for (var i = 0; i < this.state.pastSearches.length; i++) {
    if (this.state.pastSearches[i] === searchToRemove) {
      this.state.pastSearches.splice(i, 1);
    }
  }
  lastElement = this.state.pastSearches[this.state.pastSearches.length - 1] || 'Dogs';
  this.getSearchResult(lastElement.searchTerm);
  this.setState({
    pastSearches: this.state.pastSearches,
    searchRequest: lastElement.searchTerm
  })
}

pastSearchClick (clickedPastSearchTerm) {
  this.setState({
    photos: clickedPastSearchTerm.photos,
    searchRequest: clickedPastSearchTerm.searchTerm
  })
}

//Progress Bar Functions
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

//Favorites Functions
addToFavorites (photoToAddToFavorites) {
  for (var i = 0; i < this.state.photos.length; i++) {
    if (this.state.photos[i].id === photoToAddToFavorites.id) {
      this.state.favorites.push(photoToAddToFavorites);
      this.state.photos.splice(i, 1);
    }
  }
  this.setState({
    photos: this.state.photos,
    favorites: this.state.favorites
  })
}

goToFavorites () {
  this.setState({
    page: 'favorites'
  })
}

backToMain () {
  this.setState({
    page: 'main'
  })
}

deleteFromFavorites (photoToBeDeleted) {
  for (var i = 0; i < this.state.favorites.length; i++) {
    if (this.state.favorites[i].id === photoToBeDeleted.id) {
      this.state.favorites.splice(i, 1);
    }
  }
  this.setState({
    favorites: this.state.favorites
  })
}





  render() {
    return (
        <MuiThemeProvider>
          <AppBar
          title='Redshift Coding Challenge'
          showMenuIconButton={false}
          titleStyle={{fontSize: '3em'}}
          style={{padding: '30px', background: 'black'}}>
            <div className={style.AppBar}>
              {this.state.page === 'main' &&
                <RaisedButton label='Favorites' onClick={this.goToFavorites} style={{marginBottom: '20px'}} labelColor='#062F4F'/>
              }
              {this.state.page === 'favorites' &&
                <RaisedButton label='Home' onClick={this.backToMain} labelColor='#062F4F' style={{marginBottom: '20px'}}/>
              }
            </div>
          </AppBar>
          <LinearProgress mode='determinate' value={this.state.completed} color='#B82601'/><br/>
        {this.state.page === 'main' &&
        <div>
          <div className={style.App}>
            <SearchedPhotos photos={this.state.photos} addToFavorites={this.addToFavorites}/>

                <Sidebar searchRequest={this.state.searchRequest} handleRemovePastSearch={this.handleRemovePastSearch} pastSearches={this.state.pastSearches} getSearchResult={this.getSearchResult} pastSearchClick={this.pastSearchClick} goToFavorites={this.goToFavorites}/>
            </div>
          </div>}
          {this.state.page === 'favorites' &&
            <Favorites backToMain={this.backToMain} favorites={this.state.favorites} dialogBoxContents={this.state.dialogBoxContents} deleteFromFavorites={this.deleteFromFavorites}/>
          }
        </MuiThemeProvider>
    );
  }
}

export default App;
