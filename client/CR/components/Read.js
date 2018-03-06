import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

//each letter is going to need it's own tag so that each letter can be clicked on?

const words = ['https://i.imgur.com/x5LhCS0.jpg', 'https://i.imgur.com/ZUPEJBx.jpg', 'https://i.imgur.com/Kx3oeLd.jpg']

class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
       bookChoice: ''
    };
  };

  render() {
    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'space-around'}}>
          <div style={{textAlign: 'center', fontSize: '2em', marginBottom: '20px', fontWeight: 'bold'}}>Choose your book.</div><p></p>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {words.map((word, index) => (
                <img key={index} src={word} onClick={() => {this.setState({bookChoice: word})}} style={{width: '20%', cursor: 'pointer'}}/>
              ))
            }
          </div>
         {this.state.bookChoice !== '' &&
         <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <img src={this.state.bookChoice} style={{minWidth: '20%', border: '4px solid black', borderRadius: '10px', margin: '20px'}}/>
           <Link to='/activity'>
             <RaisedButton label='Next' primary={true}/>
           </Link>
         </div>
          }
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Read;
