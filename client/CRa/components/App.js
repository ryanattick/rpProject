import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header';
import Learn from './Learn';
import TryItOut from './TryItOut';
import Read from './Read';
import Activity from './Activity';
import LessonMenu from './LessonMenu';

// #E29622 orange
// #204E73 blue

//use functions to bring elements of state to this componenet
//on click pass data as props rather than importing for each component



class App extends Component {
  constructor() {
    super();
    this.state = {
      lessonChosen: true,
      lessonClicked: ''
    };
    this.onLessonClick = this.onLessonClick.bind(this);
};

  // const lesson = this.state.lessonClicked;

  onLessonClick(lesson) {
    let lessonNumber = `CR${lesson.substring(0, lesson.indexOf(' ')).replace('.','')}`;

    this.setState({
      lessonClicked: lessonNumber
    }, () => console.log(this.state));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.state.lessonChosen &&
            <div>
              <div style={{fontSize: '24px', textAlign: 'center'}}>Comprehension Reader Lesson 2.7a: Making Inferences</div>
              <Header/>
              <Switch>
                <Route exact path='/learn' render={()=> <Learn/>}/>
                <Route exact path='/tryitout' component={TryItOut}/>
                <Route exact path='/read' component={Read}/>
                <Route exact path='/activity' component={Activity}/>
              </Switch>
              <RaisedButton label='Choose Lesson' primary={true} onClick={() => this.setState({lessonChosen: false})}></RaisedButton>
            </div>
          }
          {!this.state.lessonChosen &&
            <LessonMenu onLessonClick={this.onLessonClick}/>
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
