import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Learn from './Learn';
import TryItOut from './TryItOut';
import Read from './Read';
import Activity from './Activity';

// #E29622 orange
// #204E73 blue


const App = () => {
  return (
    <div>
      <div style={{fontSize: '24px', textAlign: 'center'}}>Comprehension Reader Lesson 2.7a: Making Inferences</div>
      <Header/>
      <Switch>
        <Route exact path='/learn' component={Learn}/>
        <Route exact path='/tryitout' component={TryItOut}/>
        <Route exact path='/read' component={Read}/>
        <Route exact path='/activity' component={Activity}/>
      </Switch>
    </div>
  );
}

export default App;
