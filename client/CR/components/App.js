import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Switch, Route, Link} from 'react-router-dom';
import Header from './Header';
import Learn from './Learn';
import TryItOut from './TryItOut';
import Read from './Read';
import Activity from './Activity';
import LessonMenu from './LessonMenu';
import Report from './Report';
import Review from './Review';
import Quiz from './Quiz';
import LessonComplete from './LessonComplete';
import lessonData from '../../../lessonData';

// #E29622 orange
// #204E73 blue

//import LessonData and try to pass the data from here to the components


class App extends Component {
  constructor() {
    super();
    this.state = {
      lessonName: '',
      lessonType: '',
      lessonClicked: '',
      data: '',
      tryItOutAnswers: [],
      bookChoice: '',
      activityAnswers: [],
      quizAnswers: [],
      lessonComplete: false,
      lessonBComplete: false
    };
    this.onLessonClick = this.onLessonClick.bind(this);
    this.getBookChoice = this.getBookChoice.bind(this);
    this.getTryItOutAnswers = this.getTryItOutAnswers.bind(this);
    this.getActivityAnswers = this.getActivityAnswers.bind(this);
    this.getQuizAnswers = this.getQuizAnswers.bind(this);
};


  onLessonClick(lesson) {
    let lessonNumber = `CR${lesson.substring(0, lesson.indexOf(' ')).replace('.','')}`;
    let lessonType = lessonNumber[lessonNumber.length - 1];

    this.setState({
      lessonName: lesson,
      lessonClicked: lessonNumber,
      lessonType: lessonType
    }, () => {
      this.setState({
        data: lessonData[this.state.lessonClicked]
      })
    });
  }

  getBookChoice(book) {
    this.setState({
      bookChoice : book
    });
  }

  getTryItOutAnswers(answer1, answer2, answer3) {
    this.setState({
      tryItOutAnswers : [answer1, answer2, answer3]
    });
  }

  getActivityAnswers(answers) {
    this.setState({
      activityAnswers: answers,
      lessonComplete: true
    });
  }

  getQuizAnswers(answers) {
    this.setState({
      quizAnswers: answers,
      lessonBComplete: true
    }, () => console.log(this.state, 'QUIIIIIZZZ'));
  }

  sendData() {
    axios.post('/data', {
      data: this.state
    })
    .then(function (response) {
      console.log(response, 'RESPONSEEEE');
    })
    .catch(function (error) {
      console.log(error, 'ERRORRRRR');
    });
  }


  render() {
    const Alessons = ['2.1a Sequence of Events', '2.2a Story Structure', '2.3a Character\'s Response to Events', '2.4a Main Topic in an Informational Text', '2.5a Informational Text Features', '2.6a Sequence in an Informational Text', '2.7a Making Inferences', '2.8a Summarizing Stories'];

    const Blessons = ['2.1b Sequence of Events', '2.2b Story Structure', '2.3b Character\'s Response To Events'];

    return (
        <div>
          {typeof this.state.data === 'object' && !this.state.lessonComplete && this.state.lessonType === 'a' &&
            <div>
              <Link to='/' style={{color: 'black', textDecoration: 'none', cursor: 'none'}}>
                <div style={{fontSize: '24px', textAlign: 'center', borderBottom: '4px solid black', paddingBottom: '25px', margin: '20px', cursor: 'pointer'}} onClick={() => this.setState({lessonClicked: '', data: ''})}>{this.state.lessonName}</div>
              </Link>
              <Switch>
                <Route exact path='/' render={()=> <Learn data={this.state.data}/>}/>
                <Route exact path='/tryitout' render={()=> <TryItOut getTryItOutAnswers={this.getTryItOutAnswers} data={this.state.data}/>}/>
                <Route exact path='/read' render={()=> <Read getBookChoice={this.getBookChoice} data={this.state.data}/>}/>
                <Route exact path='/activity' render={()=> <Activity getActivityAnswers={this.getActivityAnswers} data={this.state.data}/>}/>
              </Switch>
            </div>
          }
          {typeof this.state.data === 'object' && !this.state.lessonBComplete && this.state.lessonType === 'b' &&
            <div>
              <Link to='/' style={{color: 'black', textDecoration: 'none', cursor: 'none'}}>
                <div style={{fontSize: '24px', textAlign: 'center', borderBottom: '4px solid black', paddingBottom: '25px', margin: '20px', cursor: 'pointer'}} onClick={() => this.setState({lessonClicked: '', data: ''})}>{this.state.lessonName}</div>
              </Link>
              <Switch>
                <Route exact path='/' render={()=> <Review data={this.state.data}/>}/>
                <Route exact path='/read' render={()=> <Read getBookChoice={this.getBookChoice}  data={this.state.data}/>}/>
                <Route exact path='/activity' render={()=> <Activity getActivityAnswers={this.getActivityAnswers} data={this.state.data}/>}/>
                <Route exact path='/quiz' render={()=> <Quiz getQuizAnswers={this.getQuizAnswers} data={this.state.data}/>}/>
              </Switch>
            </div>
          }
          {this.state.lessonClicked === '' &&
            <div>
              <div style={{fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', width: '90%', padding: '20px', margin: 'auto', marginBottom: '20px', marginTop: '20px'}}>Welcome to Reading Partners!</div>
              <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <LessonMenu onLessonClick={this.onLessonClick} lessons={Alessons} color={'#E29622'}/>
                <LessonMenu onLessonClick={this.onLessonClick} lessons={Blessons} color={'#204E73'}/>
              </div>
            </div>
          }
          {this.state.lessonComplete && !this.state.data.subdirections &&
            <div>
              <Link to='/' style={{color: 'black', textDecoration: 'none', cursor: 'none'}}>
                <div style={{fontSize: '24px', textAlign: 'center', borderBottom: '4px solid black', paddingBottom: '25px', margin: '20px', cursor: 'pointer'}} onClick={() => this.setState({lessonClicked: '', data: '', lessonComplete: false})}>{this.state.lessonName}</div>
              </Link>
              <LessonComplete data={this.state.data}/>
            </div>
          }
          {this.state.lessonBComplete &&
            <div>
              <Link to='/' style={{color: 'black', textDecoration: 'none', cursor: 'none'}}>
                <div style={{fontSize: '24px', textAlign: 'center', borderBottom: '4px solid black', paddingBottom: '25px', margin: '20px', cursor: 'pointer'}} onClick={() => this.setState({lessonClicked: '', data: '', lessonComplete: false})}>{this.state.lessonName}</div>
              </Link>
              <LessonComplete data={this.state.data}/>
            </div>
          }
        </div>
    );
  }
}

export default App;
