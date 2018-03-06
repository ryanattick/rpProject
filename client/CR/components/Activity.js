import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const words = ['An inference is a something you figure out using the clues in the words and pictures.', 'Look back in the book and find four places where you can make inferences. In each bubble, write one inference and then two clues that helped you make that inference. Remember to use complete sentances!', 'Inference', 'inference1', 'clue1a', 'clue1b', 'inference2', 'clue2a', 'clue2b', 'inference3', 'clue3a', 'clue3b', 'inference4', 'clue4a', 'clue4b' ]

class Activity extends Component {
    constructor(props) {
      super(props);
      this.state = {
        [words[3]]: '',
        [words[4]]: '',
        [words[5]]: '',
        [words[6]]: '',
        [words[7]]: '',
        [words[8]]: '',
        [words[9]]: '',
        [words[10]]: '',
        [words[11]]: '',
        [words[12]]: '',
        [words[13]]: '',
        [words[14]]: '',
        [words[15]]: '',
      };
    };

  handleTextChange(state, event) {
    this.setState({
      [state]: event.target.value
    }, () => console.log(this.state))
  }

  render() {
    return (
      <MuiThemeProvider>
        {console.log(this.state)}
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexWrap: 'wrap', width: '80%', margin: 'auto'}}>
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%', alignSelf: 'center', marginBottom: '20px'}}>{words[0]}</div>
          <div style={{fontSize: '2em', padding: '20px', alignSelf: 'center'}}><strong>Directions: </strong>{words[1]}</div>
          <div style={{width: '500px', height: '500px', background: 'aqua', border: '2px solid #204E73', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference1', event)}
              hintText={words[2]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
              style={{marginBottom: '40px'}}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue1a', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue1b', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
          </div>
          <div style={{width: '500px', height: '500px', background: '#f4c242', border: '2px solid #E29622', borderRadius: '50%', alignSelf: 'flex-start', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference2', event)}
              hintText={words[2]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue2a', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue2b', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
            />
          </div>
          <div style={{width: '500px', height: '500px', background: 'aqua', border: '2px solid #204E73', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference3', event)}
              hintText={words[2]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue3a', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue3b', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
          </div>
          <div style={{width: '500px', height: '500px', background: '#f4c242', border: '2px solid #E29622', borderRadius: '50%', alignSelf: 'flex-start', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference4', event)}
              hintText={words[2]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue4a', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue4b', event)}
              hintText={words[3]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
            />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Activity;
