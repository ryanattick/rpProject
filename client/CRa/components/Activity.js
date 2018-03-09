import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import lessonData from '../../../lessonData';

const activity = lessonData.CR21a.activity;

class Activity extends Component {
    constructor(props) {
      super(props);
      this.state = {
        [activity[3]]: '',
        [activity[4]]: '',
        [activity[5]]: '',
        [activity[6]]: '',
        [activity[7]]: '',
        [activity[8]]: '',
        [activity[9]]: '',
        [activity[10]]: '',
        [activity[11]]: '',
        [activity[12]]: '',
        [activity[13]]: '',
        [activity[14]]: '',
        [activity[15]]: '',
        data: {}
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
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%', alignSelf: 'center', marginBottom: '20px'}}>{activity[0]}</div>
          <div style={{fontSize: '2em', padding: '20px', alignSelf: 'center'}}><strong>Directions: </strong>{activity[1]}</div>
          <div style={{width: '500px', height: '500px', background: 'aqua', border: '2px solid #204E73', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference1', event)}
              hintText={activity[2]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
              style={{marginBottom: '40px'}}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue1a', event)}
              hintText={activity[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue1b', event)}
              hintText={activity[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
          </div>
          <div style={{width: '500px', height: '500px', background: '#f4c242', border: '2px solid #E29622', borderRadius: '50%', alignSelf: 'flex-start', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference2', event)}
              hintText={activity[2]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue2a', event)}
              hintText={activity[3]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue2b', event)}
              hintText={activity[3]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
            />
          </div>
          <div style={{width: '500px', height: '500px', background: 'aqua', border: '2px solid #204E73', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference3', event)}
              hintText={activity[2]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue3a', event)}
              hintText={activity[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue3b', event)}
              hintText={activity[3]}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
            />
          </div>
          <div style={{width: '500px', height: '500px', background: '#f4c242', border: '2px solid #E29622', borderRadius: '50%', alignSelf: 'flex-start', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('inference4', event)}
              hintText={activity[2]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue4a', event)}
              hintText={activity[3]}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
            />
            <TextField
              onChange={(event) => this.handleTextChange('clue4b', event)}
              hintText={activity[3]}
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
