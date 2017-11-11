import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Favorites extends Component {


  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 600,
        height: 550,
        overflowY: 'auto',
      },
    };

    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Home" onClick={this.props.backToMain}/>
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
              cols={3}
            >
              {this.props.favorites.map((photo, index) => (
                <GridTile
                  key={index}
                  title={photo.title}
                  actionIcon={<IconButton><DeleteForever color="white" onClick={this.props.deleteFromFavorites.bind(this, photo)}/></IconButton>}
                >
                  <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Favorites;
