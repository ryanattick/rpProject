import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import lessonData from '../../../lessonData';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';



const practice = lessonData.CR21a.practice;

class TryItOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1: '',
      answer2: '',
      answer3: ''
    };
  };

 handleAnswer1Input(event) {
    this.setState({
      answer1: event.target.value
    });
  };

  handleAnswer2Input(event) {
     this.setState({
       answer2: event.target.value
     });
   };

   handleAnswer3Input(event) {
      this.setState({
        answer3: event.target.value
      });
    };

  render() {
    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{practice[0]}</div>
          <iframe src={practice[4]} width="327" height="480" frameBorder="0" style={{pointerEvents: 'none'}}></iframe><p></p>
          <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center', textAlign: 'center'}}>
            <div style={{fontSize: '2em', padding: '20px'}}><strong>Directions: </strong>{practice[1]}</div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{practice[2]}</strong> <br/>
              {practice[3]}
              <TextField onChange={(event) => this.handleAnswer1Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{practice[5]}</strong> <br/>
              {practice[6]}
              <TextField onChange={(event) => this.handleAnswer2Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{practice[7]}</strong> <br/>
              {practice[8]}
              <TextField onChange={(event) => this.handleAnswer3Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            {this.state.answer1 !== '' && this.state.answer2 !== '' && this.state.answer3 !== '' &&
              <Link to='/read' style={{marginBottom: '20px'}}>
                <RaisedButton label='Next' primary={true}/>
              </Link>
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default TryItOut;
