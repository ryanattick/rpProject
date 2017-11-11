import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
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
              }]
    };
    this.getSearchResult = this.getSearchResult.bind(this);
  }

requestToServer (searchRequest) {
  $.get('/test', {search: searchRequest}, (data) => {
    this.setState({
      photos: data
    }, () => {console.log(this.state.photos[0].title)})
  })
}

componentWillMount (searchRequest) {
  this.requestToServer('cycling');
}

getSearchResult (searchRequest) {
  this.requestToServer(searchRequest);
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
