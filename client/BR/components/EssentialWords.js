import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router-dom';

const essentialWords = ['on', 'and']


class EssentialWords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      open: false,
      correct: false
    };
  };

  handleClose() {
    this.setState({
      open: false,
      correct: false
    });
  };

  handleTextInput(event) {
    this.setState({
      text: event.target.value
    }, () => console.log('STATE: ', this.state.text));
  };

  handleSubmit(word) {
    this.setState({open: true}, () => {
      if (this.state.text === word) {
          console.log('WORD:', word, this.state.text)
          this.setState({
            correct: true
          })
        } else {
            console.log('NOT QUITE.....', word)
          }
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={() => this.handleClose()}
      />,
    ];

    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', flexWrap: 'wrap'}}>
          {essentialWords.map((word) => (
            <div key={word} style={{border: '2px solid black', width: '300px', height: '150px', textAlign: 'center', fontSize: '2em', marginBottom: '10px', marginRight: '10px'}}>
              <div style={{marginBottom: '20px'}}>{word}</div>
              <div className="input-group input-group-default" style={{margin: 'auto'}}>
                <input type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={(event) => {this.handleTextInput(event)}}/>
              </div>
              {console.log(word, 'WORDDDDD')}
              <RaisedButton label={word} onClick={(word) => this.handleSubmit(word)} />
              {this.state.correct &&
                <Dialog
                  title="Dialog With Actions"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.handleClose()}
                  >
                    CORRECTTTTT
                  </Dialog>
              }
              {!this.state.correct &&
                <Dialog
                  title="Dialog With Actions"
                  actions={actions}
                  modal={false}
                  open={this.state.open}
                  onRequestClose={() => this.handleClose()}
                  >
                    INCORRECT
                  </Dialog>
              }
            </div>
          ))}
          <Link to='/comprehension'>
          <button type="button" className="btn btn-success btn-lg" style={{flex: 1}}>Next</button>
        </Link>
      </div>
    </MuiThemeProvider>
    );
  };
};

export default EssentialWords;
