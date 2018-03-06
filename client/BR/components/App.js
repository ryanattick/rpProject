import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';
import Teach from './Teach';
import Apply from './Apply';
import Header from './Header';
import EssentialWords from './EssentialWords';
import Comprehension from './Comprehension';
import ReadingPractice from './ReadingPractice';
import Practice from './Practice';


const App = () => {
  return (
    <div>
      <div style={{fontSize: '24px', textAlign: 'center'}}>Beginning Reader Lesson 2: s & t</div>
      <Header/>
      <Switch>
        <Route exact path='/teach' component={Teach}/>
        <Route exact path='/practice' component={Practice}/>
        <Route exact path='/apply' component={Apply}/>
        <Route exact path='/essentialwords' component={EssentialWords}/>
        <Route exact path='/comprehension' component={Comprehension}/>
        <Route exact path='/readingpractice' component={ReadingPractice}/>
      </Switch>
    </div>
  );
}

export default App;
