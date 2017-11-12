import React, { Component } from 'react';

//Material-UI
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';




class Favorites extends Component {


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
        {this.props.favorites.length === 0 &&
          <div style={{color: '#B82601', fontSize: '3em', fontFamily: 'Roboto, sans-serif', margin: 'auto', textAlign: 'center', maxWidth: '60%'}}>
            Please add some cool photos to your favorites by clicking the star icon.<br/>
            <StarBorder style={{maxHeight: '100%'}} color="#B82601"/>
          </div>
        }
        <div>
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
