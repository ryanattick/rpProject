import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import LinearProgress from 'material-ui/LinearProgress';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import style from '../style/app.css';
import Favorites from './Favorites.js';
import SearchedPhotos from './SearchedPhotos.js';



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
  if (!alreadyContainsSearchTerm) {
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
  for (var i = 0; i < this.state.pastSearches.length; i++) {
    if (this.state.pastSearches[i] === searchToRemove) {
      this.state.pastSearches.splice(i, 1);
    }
  }
  this.getSearchResult('Dogs');
  this.setState({
    pastSearches: this.state.pastSearches
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

//Favorite Functions
addToFavorites (photoToAddToFavorites) {
  this.state.favorites.push(photoToAddToFavorites);
  this.setState({
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
          title="Coding Challenge"
          showMenuIconButton={false}
          style={{padding: '30px', background: 'red'}}
        />
        {this.state.completed < 100 &&
          <LinearProgress mode="determinate" value={this.state.completed} />
        } <br/>
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
