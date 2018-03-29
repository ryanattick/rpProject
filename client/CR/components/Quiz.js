import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';



class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      skillAnswer: '',
      question1: '',
      question2: '',
      question3: ''
    };
    this.handleSkillAnswerChange = this.handleSkillAnswerChange.bind(this);
    this.handleQuestion1Change = this.handleQuestion1Change.bind(this);
    this.handleQuestion2Change = this.handleQuestion2Change.bind(this);
    this.handleQuestion3Change = this.handleQuestion3Change.bind(this);
  }

  handleSkillAnswerChange(event) {
    this.setState({
      skillAnswer: event.target.value
    });
  }

  handleQuestion1Change (e) {
    this.setState({
      question1: e.target.value
    })
  }

  handleQuestion2Change (e) {
    this.setState({
      question2: e.target.value
    })
  }

  handleQuestion3Change (e) {
    this.setState({
      question3: e.target.value
    })
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {

    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center'}}>
          <div style={{fontSize: '2em', padding: '20px', textAlign: 'center'}}><strong>Directions: </strong> {this.state.data.quiz.directions}</div>
          <div style={{fontSize: '1.5em', margin: '20px'}}><em>The STUDENT should be typing and working as indepentantly as possible.</em></div>
          <TextField hintText={this.state.data.quiz.fillInTextHint} style={{width: '80%'}} onChange={(event) => this.handleSkillAnswerChange(event)}></TextField>
          <div>
            <div style={{marginTop: '20px', fontSize: '1.5em', fontWeight: 'bold'}}>{this.state.data.quiz.question1.questionText}</div>
            <RadioButtonGroup name='question1' onChange={this.handleQuestion1Change}>
              <RadioButton
                value={this.state.data.quiz.question1.answer1}
                label={this.state.data.quiz.question1.answer1}
                />
              <RadioButton
                value={this.state.data.quiz.question1.answer2}
                label={this.state.data.quiz.question1.answer2}
                />
              <RadioButton
                value={this.state.data.quiz.question1.answer3}
                label={this.state.data.quiz.question1.answer3}
                />
              <RadioButton
                value={this.state.data.quiz.question1.answer4}
                label={this.state.data.quiz.question1.answer4}
                />
            </RadioButtonGroup>
            <div style={{marginTop: '20px', fontSize: '1.5em', fontWeight: 'bold'}}>{this.state.data.quiz.question2.questionText}</div>
            <RadioButtonGroup name="question2" onChange={this.handleQuestion2Change}>
              <RadioButton
                value={this.state.data.quiz.question2.answer1}
                label={this.state.data.quiz.question2.answer1}
                />
              <RadioButton
                value={this.state.data.quiz.question2.answer2}
                label={this.state.data.quiz.question2.answer2}
                />
              <RadioButton
                value={this.state.data.quiz.question2.answer3}
                label={this.state.data.quiz.question2.answer3}
                />
              <RadioButton
                value={this.state.data.quiz.question2.answer4}
                label={this.state.data.quiz.question2.answer4}
                />
            </RadioButtonGroup>
            <div style={{marginTop: '20px', fontSize: '1.5em', fontWeight: 'bold'}}>{this.state.data.quiz.question3.questionText}</div>
            <RadioButtonGroup name="question3" onChange={this.handleQuestion3Change} style={{marginBottom: '20px'}}>
              <RadioButton
                value={this.state.data.quiz.question3.answer1}
                label={this.state.data.quiz.question3.answer1}
                />
              <RadioButton
                value={this.state.data.quiz.question3.answer2}
                label={this.state.data.quiz.question3.answer2}
                />
              <RadioButton
                value={this.state.data.quiz.question3.answer3}
                label={this.state.data.quiz.question3.answer3}
                />
              <RadioButton
                value={this.state.data.quiz.question3.answer4}
                label={this.state.data.quiz.question3.answer4}
                />
            </RadioButtonGroup>
          </div>
          {this.state.skillAnswer.length > 5 && this.state.question1 && this.state.question2 && this.state.question3 &&
            <RaisedButton style={{marginBottom: '20px'}} label='Done!' primary={true} onClick={() => this.props.getQuizAnswers([[this.state.data.quiz.fillInTextHint, this.state.skillAnswer], [this.state.data.quiz.question1.questionText, this.state.question1], [this.state.data.quiz.question2.questionText, this.state.question2], [this.state.data.quiz.question3.questionText, this.state.question3]])}/>
          }
        </div>
      </MuiThemeProvider>
    );

  }

}

export default Quiz;


//the STUDENT should be doing this as indepentantly as possible
//one fill in the blank for the definition of the skill
//3 multiple choice questions pertaining to the skill
//after quiz is shown with correct answers and the answers the student provided
