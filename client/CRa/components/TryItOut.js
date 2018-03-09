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

    // style={{pointerEvents: 'none'}} for giphy onhover

  render() {
    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{this.state.data.practice[0]}</div>
          <iframe src={this.state.data.practice[4]} width="327" height="480" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '20px'}}></iframe><p></p>
          <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center', textAlign: 'center'}}>
            <div style={{fontSize: '2em', padding: '20px'}}><strong>Directions: </strong>{this.state.data.practice[1]}</div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{this.state.data.practice[2]}</strong> <br/>
              {this.state.data.practice[3]}
              <TextField onChange={(event) => this.handleAnswer1Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{this.state.data.practice[5]}</strong> <br/>
              {this.state.data.practice[6]}
              <TextField onChange={(event) => this.handleAnswer2Input(event)} hintText='Type your answer here' fullWidth={true}/>
            </div>
            <div style={{border: '2px solid black', margin: '10px', width: '80%', fontSize: '1.5em'}}>
              <strong>{this.state.data.practice[7]}</strong> <br/>
              {this.state.data.practice[8]}
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
