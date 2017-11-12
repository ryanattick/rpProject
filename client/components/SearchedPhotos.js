import React, { Component } from 'react';

//Material-UI
import {GridList, GridTile} from 'material-ui/GridList';
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
        width: 750,
        height: 700,
        overflowY: 'auto',
      },
    };

    return (
      <MuiThemeProvider>
        {this.props.photos.length === 0 &&
          <div style={{margin: 'auto', minHeight: '50%', fontFamily: 'Roboto, sans-serif', fontSize: '2em', textAlign: 'center'}}>
            Sorry! There are no images that match your request. Please try searching for something else.
            <img src="https://i.imgur.com/AgASQTd.jpg" style={{margin: 'auto', minHeight: '50%', display: 'block'}}/>
          </div>
        }
        {this.props.photos.length > 0 &&
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
                  actionIcon={<IconButton onClick={this.props.addToFavorites.bind(this, photo)}><StarBorder hoverColor='#B82601' color="white" /></IconButton>}
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
             titleStyle={{textAlign: 'center'}}
             bodyStyle={{textAlign: 'center'}}
             actionsContainerStyle={{textAlign: 'center'}}
             >
               <img src={`https://farm${this.state.dialogBoxContents.farm}.staticflickr.com/${this.state.dialogBoxContents.server}/${this.state.dialogBoxContents.id}_${this.state.dialogBoxContents.secret}.jpg`} align="middle"/>
             </Dialog>
          </div>
        </div>}
      </MuiThemeProvider>
    );
  }
}

export default SearchedPhotos;
