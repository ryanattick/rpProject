import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import LinearProgress from 'material-ui/LinearProgress';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import style from '../style/app.css';
import Favorites from './Favorites.js';



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
     open: false,
     dialoxBoxContents: [],
     favorites: [],
    };
    this.getSearchResult = this.getSearchResult.bind(this);
    this.handleRemovePastSearch = this.handleRemovePastSearch.bind(this);
    this.pastSearchClick = this.pastSearchClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.setDialogBoxContents = this.setDialogBoxContents.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.goToFavorites = this.goToFavorites.bind(this);
    this.backToMain = this.backToMain.bind(this);
  }

//Dialog Box Functions
handleOpen (photo) {
   this.setState({open: true});
 };

 handleClose () {
   this.setState({open: false});
 };

 setDialogBoxContents (chosenPhoto) {
   this.setState({
     dialoxBoxContents: chosenPhoto
   }, () => {
     this.handleOpen();
   })
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
  }, () => {
    console.log(this.state.favorites, 'FAVORITES')
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





  render() {
    const actions = [
       <FlatButton
         label="Close"
         primary={true}
         onClick={this.handleClose}
       />,
     ];

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
        {this.state.page === 'main' &&
        <div>
          <div className={style.App}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
              >
              {this.state.photos.map((photo, index) => (
                <GridTile
                  key={index}
                  title={photo.title}
                  actionIcon={<IconButton onClick={this.addToFavorites.bind(this, photo)}><StarBorder color="white" /></IconButton>}
                  >
                    <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} onClick={this.setDialogBoxContents.bind(this, photo)}/>
                  </GridTile>
                ))}
              </GridList>
              <Dialog
                title={this.state.dialoxBoxContents.title}
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                >
                  <img src={`https://farm${this.state.dialoxBoxContents.farm}.staticflickr.com/${this.state.dialoxBoxContents.server}/${this.state.dialoxBoxContents.id}_${this.state.dialoxBoxContents.secret}.jpg`} />
                </Dialog>
                <Sidebar searchRequest={this.state.searchRequest} handleRemovePastSearch={this.handleRemovePastSearch} pastSearches={this.state.pastSearches} getSearchResult={this.getSearchResult} pastSearchClick={this.pastSearchClick} goToFavorites={this.goToFavorites}/>
            </div>
          </div>}
          {this.state.page === 'favorites' &&
            <Favorites backToMain={this.backToMain} favorites={this.state.favorites} dialoxBoxContents={this.state.dialoxBoxContents}/>
          }
        </MuiThemeProvider>
    );
  }
}

export default App;
