import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Learn from './Learn';
import TryItOut from './TryItOut';
import Read from './Read';
import Activity from './Activity';
import LessonMenu from './LessonMenu';
import Report from './Report';
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
      lessonClicked: '',
      data: '',
      tryItOutAnswers: [],
      bookChoice: '',
      activityAnswers: [],
      lessonComplete: false
    };
    this.onLessonClick = this.onLessonClick.bind(this);
    this.getBookChoice = this.getBookChoice.bind(this);
    this.getTryItOutAnswers = this.getTryItOutAnswers.bind(this);
    this.getActivityAnswers = this.getActivityAnswers.bind(this);
};


  onLessonClick(lesson) {
    let lessonNumber = `CR${lesson.substring(0, lesson.indexOf(' ')).replace('.','')}`;

    this.setState({
      lessonName: lesson,
      lessonClicked: lessonNumber
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

  render() {
    return (
        <div>
          {typeof this.state.data === 'object' && !this.state.lessonComplete &&
            <div>
              <div style={{fontSize: '24px', textAlign: 'center'}}>{this.state.lessonName}</div>
              <Header/>
              <Switch>
                <Route exact path='/learn' render={()=> <Learn data={this.state.data}/>}/>
                <Route exact path='/tryitout' render={()=> <TryItOut getTryItOutAnswers={this.getTryItOutAnswers} data={this.state.data}/>}/>
                <Route exact path='/read' render={()=> <Read getBookChoice={this.getBookChoice} data={this.state.data}/>}/>
                <Route exact path='/activity' render={()=> <Activity getActivityAnswers={this.getActivityAnswers} data={this.state.data}/>}/>
              </Switch>
            </div>
          }
          {this.state.lessonClicked === '' &&
            <LessonMenu onLessonClick={this.onLessonClick}/>
          }
          {this.state.lessonComplete &&
            <LessonComplete data={this.state.data}/>
            // <Report bookChoice={this.state.bookChoice} tryItOutAnswers={this.state.tryItOutAnswers} activityAnswers={this.state.activityAnswers}/>
          }
        </div>
    );
  }
}

export default App;
