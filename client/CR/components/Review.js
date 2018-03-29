import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';



class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      showSkillDescription: true,
      inputAnswer: ''
    };
  };

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  handleAnswerInput(event) {
    this.setState({
      inputAnswer: event.target.value
    })
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          {this.state.showSkillDescription &&
            <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%', cursor: 'pointer'}} onClick={() => this.setState({showSkillDescription: false})}>
            {this.state.data.skillDescription}
            </div>
          }
          <div style={{display: 'flex', flexFlow: 'column wrap'}}>
            {!this.state.showSkillDescription &&
              <RaisedButton label='Show Skill Description' primary={true} onClick={() => this.setState({showSkillDescription: true})} style={{alignSelf: 'center'}}/>
            }
            {this.state.data.review.media1.includes('youtube') &&
                <iframe src={this.state.data.review.media1} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '10px'}}></iframe>
            }
            {this.state.data.review.media1.includes('giphy') &&
              <div>
                <iframe src={this.state.data.review.media1} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '10px', pointerEvents: 'none'}}></iframe><p></p>
              </div>
            }
          </div>
          <div style={{fontSize: '2em', padding: '20px'}}><strong>Directions: </strong>{this.state.data.review.directions}</div>
          <div style={{display: 'flex', flexFlow: 'column wrap'}}>
            <TextField onChange={(event) => this.handleAnswerInput(event)} hintText='Type your answer here' style={{width: '800px'}}/>
            {this.state.inputAnswer.length > 10 &&
              <Link to='/read' style={{marginTop: '20px', alignSelf: 'center'}}>
              <RaisedButton label='Next' primary={true}/>
              </Link>
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Review;
