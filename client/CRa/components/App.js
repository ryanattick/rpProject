import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Learn from './Learn';
import TryItOut from './TryItOut';
import Read from './Read';
import Activity from './Activity';
import LessonMenu from './LessonMenu';
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
      activityAnswers: []
    };
    this.onLessonClick = this.onLessonClick.bind(this);
    this.getBookChoice = this.getBookChoice.bind(this);
    this.getTryItOutAnswers = this.getTryItOutAnswers.bind(this);
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

  render() {
    return (
        <div>
          {typeof this.state.data === 'object' &&
            <div>
              <div style={{fontSize: '24px', textAlign: 'center'}}>{this.state.lessonName}</div>
              <Header/>
              <Switch>
                <Route exact path='/learn' render={()=> <Learn data={this.state.data}/>}/>
                <Route exact path='/tryitout' render={()=> <TryItOut getTryItOutAnswers={this.getTryItOutAnswers} data={this.state.data}/>}/>
                <Route exact path='/read' render={()=> <Read getBookChoice={this.getBookChoice} data={this.state.data}/>}/>
                <Route exact path='/activity' render={()=> <Activity data={this.state.data}/>}/>
              </Switch>
            </div>
          }
          {this.state.lessonClicked === '' &&
            <LessonMenu onLessonClick={this.onLessonClick}/>
          }
        </div>
    );
  }
}

export default App;
