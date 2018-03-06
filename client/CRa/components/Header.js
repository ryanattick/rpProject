import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

handleOpen() {
   this.setState({open: true});
};

 handleClose() {
   this.setState({open: false});
 };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.handleClose()}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={() => this.handleClose()}
      />,
    ];

    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', margin: '20px' }}>
          <div style={{border: '2px solid #E29622', height: '50px', flex: 1, textAlign: 'center', paddingTop: '15px', borderRadius: '10px'}}>
            <Link to='/learn' onClick={() => this.handleOpen()}>Learn</Link>
          </div>
          <div style={{border: '2px solid #E29622', height: '50px', flex: 1, textAlign: 'center', paddingTop: '15px', borderRadius: '10px'}}>
            <Link to='/tryitout' onClick={() => this.handleOpen()}>Practice</Link>
          </div>
          <div style={{border: '2px solid #E29622', height: '50px', flex: 1, textAlign: 'center', paddingTop: '15px', borderRadius: '10px'}}>
            <Link to='/read' onClick={() => this.handleOpen()}>Read</Link>
          </div>
          <div style={{border: '2px solid #E29622', height: '50px', flex: 1, textAlign: 'center', paddingTop: '15px', borderRadius: '10px'}}>
            <Link to='/activity' onClick={() => this.handleOpen()}>Activity</Link>
          </div>
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            style={{display: 'flex', justifyContent: 'center'}}
            >
              <TextField hintText="Password" type='password' style={{margin: 'auto'}}/>
            </Dialog>
          </div>
      </MuiThemeProvider>
    );
  }
};

export default Header;
