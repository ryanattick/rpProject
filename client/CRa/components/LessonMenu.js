import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';


const lessonsA = ['2.1a Sequence of Events', '2.2a Story Structure', '2.3a Character\'s Response to Events', '2.4a Main Topic in an Informational Text', '2.5a Informational Text Features', '2.6a Sequence in an Informational Text', '2.7a Making Inferences', '2.8a Summarizing Stories'];

const lessonsB = ['2.1b Sequence of Events', '2.2b Story Structure', '2.3b Character\'s Response To Events'];


const LessonMenu = (props) => {
  return (
    <div style={{display: 'flex', flexFlow: 'column wrap'}}>
      <div style={{fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', width: '90%', padding: '20px', margin: 'auto', marginBottom: '20px', marginTop: '20px'}}>Welcome to Reading Partners!</div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <div style={{display: 'flex', flexFlow: 'column wrap'}}>
          {lessonsA.map((lesson, index) => (
            <Link to='/' style={{color: 'black', textDecoration: 'none', cursor: 'none'}}>
              <div onClick={() => props.onLessonClick(lesson)} key={index} style={{cursor: 'pointer', backgroundColor: '#E29622', borderRadius: '10px', fontSize: '2em', padding: '10px', margin: '20px', textAlign: 'center'}}>{lesson}</div>
            </Link>
          ))
        }
      </div>
      <div style={{display: 'flex', flexFlow: 'column wrap'}}>
        {lessonsB.map((lesson, index) => (
          <Link to='/' style={{color: 'black', textDecoration: 'none', cursor: 'none'}}>
            <div onClick={() => props.onLessonClick(lesson)} key={index} style={{cursor: 'pointer', backgroundColor: '#204E73', borderRadius: '10px', fontSize: '2em', padding: '10px', margin: '20px', alignSelf: 'flex-end', textAlign: 'center'}}>{lesson}</div>
          </Link>
        ))
      }
    </div>
      </div>
    </div>
  );
}

export default LessonMenu;
