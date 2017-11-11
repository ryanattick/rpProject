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
        width: 500,
        height: 450,
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
            >
              {this.props.favorites.map((photo, index) => (
                <GridTile
                  key={index}
                  title={photo.title}
                  actionIcon={<IconButton><DeleteForever color="white" /></IconButton>}
                >
                  <img src={`https://farm${this.state.dialoxBoxContents.farm}.staticflickr.com/${this.state.dialoxBoxContents.server}/${this.state.dialoxBoxContents.id}_${this.state.dialoxBoxContents.secret}.jpg`} />
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
