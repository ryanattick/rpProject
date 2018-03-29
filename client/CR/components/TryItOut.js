import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';




class TryItOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer1: '',
      answer2: '',
      answer3: '',
      data: {}
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

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }


  render() {
    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{this.state.data.skillDescription}</div>
          {this.state.data.practice.media.includes('youtube') &&
            <div>
              <iframe src={this.state.data.practice.media} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '20px'}}></iframe><p></p>
            </div>
          }
          {this.state.data.practice.media.includes('google') &&
            <div>
              <img src={this.state.data.practice.media} style={{border: '2px solid black', borderRadius: '10px', margin: '20px'}}></img>
            </div>
          }
          {this.state.data.practice.media.includes('giphy') &&
            <div>
              <iframe src={this.state.data.practice.media} width="480" height="480" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '20px', pointerEvents: 'none'}}></iframe><p></p>
            </div>
          }
          <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center', textAlign: 'center'}}>
            <div style={{fontSize: '2em', padding: '20px'}}><strong>Directions: </strong>{this.state.data.practice.directions}</div>
            <div style={{fontSize: '1.5em', marginBottom: '10px'}}><em>The student should type these answers (with some help if they need it).</em></div>
              {this.state.answer1 !== '' && this.state.answer2 !== '' && this.state.answer3 !== '' &&
                <div>
                  <Link to='/read'>
                    <RaisedButton style={{marginBottom: '20px'}} label='Next' primary={true} onClick={() => this.props.getTryItOutAnswers(this.state.answer1, this.state.answer2, this.state.answer3)}/>
                  </Link>
                </div>
              }
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{this.state.data.practice.question1}</strong> <br/>
              {this.state.data.practice.subQuestion1}
              <TextField onChange={(event) => this.handleAnswer1Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{this.state.data.practice.question2}</strong> <br/>
              {this.state.data.practice.subQuestion2}
              <TextField onChange={(event) => this.handleAnswer2Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{this.state.data.practice.question3}</strong> <br/>
              {this.state.data.practice.subQuestion3}
              <TextField onChange={(event) => this.handleAnswer3Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
};

export default TryItOut;
