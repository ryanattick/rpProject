import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';



const words = ['An inference is a something you figure out using the clues in the words and pictures.', 'Read the text in each box and then answer the questions that follow.', '1. Juan opened the door to his house. All his friends were there! There was also a cake, present, and balloons.', 'What inference can we make about what is happening in Juan\'s house?', 'https://giphy.com/embed/PsFhnunpPizlu', '2. Even though Tiana put on her hat and her scarf, she was still shivering.', 'What inference can we make about how Tiana is feeling?', '3. Bryan got an A on a difficult math test. He smiled all the way home.', 'What inference can you make about how Bryan is feeling?'];

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
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{words[0]}</div>
          <iframe src={words[4]} width="327" height="480" frameBorder="0" style={{pointerEvents: 'none'}}></iframe><p></p>
          <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center', textAlign: 'center'}}>
            <div style={{fontSize: '2em', padding: '20px'}}><strong>Directions: </strong>{words[1]}</div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{words[2]}</strong> <br/>
              {words[3]}
              <TextField onChange={(event) => this.handleAnswer1Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{words[5]}</strong> <br/>
              {words[6]}
              <TextField onChange={(event) => this.handleAnswer2Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{words[7]}</strong> <br/>
              {words[8]}
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
