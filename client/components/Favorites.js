import React, { Component } from 'react';

//Material-UI
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';




class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogBoxContents: [],
      open: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.setDialogBoxContents = this.setDialogBoxContents.bind(this);
  }

  handleOpen (photo) {
     this.setState({open: true});
   };

   handleClose () {
     this.setState({open: false});
   };

   setDialogBoxContents (chosenPhoto) {
     this.setState({
       dialogBoxContents: chosenPhoto
     }, () => {
       this.handleOpen();
     })
   }


  render() {
    const actions = [
       <FlatButton
         label="Close"
         primary={true}
         onClick={this.handleClose}
         labelStyle={{color: '#B82601'}}
       />,
     ];

    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: 800,
        height: 750,
        overflowY: 'auto',
      },
    };

    return (
      <MuiThemeProvider>
        {this.props.favorites.length === 0 &&
          <div style={{color: '#B82601', fontSize: '3em', fontFamily: 'Roboto, sans-serif', margin: 'auto', textAlign: 'center', maxWidth: '60%', marginTop: '20px'}}>
            Please add some cool photos to your favorites by clicking the star icon.<br/>
            <StarBorder color="#B82601"/>
          </div>
        }
        {this.props.favorites.length > 0 &&
          <div>
            <div style={{backgroundColor: 'black', height: '70px', width: '40%', margin: 'auto', fontFamily: 'Roboto, sans-serif', color: 'white', textAlign: 'center', fontSize: '2em', verticalAlign: 'middle', lineHeight: '70px', marginBottom: '20px', borderRadius: '10px'}}>
              Your Favorites
            </div>
            <div style={styles.root}>
              <GridList
                cellHeight={300}
                style={styles.gridList}
                cols={3}
              >
                {this.props.favorites.map((photo, index) => (
                  <GridTile
                    key={index}
                    title={photo.title || 'Untitled'}
                    actionIcon={<IconButton><DeleteForever color="white" onClick={this.props.deleteFromFavorites.bind(this, photo)}/></IconButton>}
                  >
                    <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} onClick={ this.setDialogBoxContents.bind(this, photo)} style={{cursor: 'pointer'}}/>
                  </GridTile>
                ))}
              </GridList>
              <Dialog
               title={this.state.dialogBoxContents.title || 'Untitled'}
               actions={actions}
               modal={false}
               open={this.state.open}
               onRequestClose={this.handleClose}
               titleStyle={{textAlign: 'center', backgroundColor: 'black', color: 'white'}}
               bodyStyle={{textAlign: 'center', backgroundColor: 'black'}}
               actionsContainerStyle={{textAlign: 'center', backgroundColor: 'black'}}
               >
                 <img src={`https://farm${this.state.dialogBoxContents.farm}.staticflickr.com/${this.state.dialogBoxContents.server}/${this.state.dialogBoxContents.id}_${this.state.dialogBoxContents.secret}.jpg`} align="middle"/>
               </Dialog>
            </div>
          </div>
        }
      </MuiThemeProvider>
    );
  }
}

export default Favorites;
