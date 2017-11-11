import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar.js';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
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
  }

componentWillMount () {
  $.get('/test', (data) => {
    this.setState({
      photos: data
    }, () => {console.log(this.state.photos[0].title)})
  })
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
               actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
             >
               <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
             </GridTile>
           ))}
         </GridList>
         <Sidebar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
