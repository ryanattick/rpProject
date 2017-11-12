import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

//Material-UI
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class SearchedPhotos extends Component {
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
         labelStyle={{color: '#813772'}}
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
        <div>
          <div style={styles.root}>
            <GridList
              cellHeight={180}
              style={styles.gridList}
            >
              {this.props.photos.map((photo, index) => (
                <GridTile
                  key={index}
                  title={photo.title}
                  actionIcon={<IconButton onClick={this.props.addToFavorites.bind(this, photo)}><StarBorder color="white" /></IconButton>}
                >
                  <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                  onClick={ this.setDialogBoxContents.bind(this, photo)} style={{cursor: 'pointer'}}/>
                </GridTile>
              ))}
            </GridList>
            <Dialog
             title={this.state.dialogBoxContents.title}
             actions={actions}
             modal={false}
             open={this.state.open}
             onRequestClose={this.handleClose}
             >
               <img src={`https://farm${this.state.dialogBoxContents.farm}.staticflickr.com/${this.state.dialogBoxContents.server}/${this.state.dialogBoxContents.id}_${this.state.dialogBoxContents.secret}.jpg`} />
             </Dialog>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SearchedPhotos;
