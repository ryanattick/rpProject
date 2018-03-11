import React from 'react';
import ReactDOM from 'react-dom';

const lessons = ['2.1a Sequence of Events', '2.2a Story Structure', '2.3a Character\'s Response to Events', '2.4a Main Topic in an Informational Text', '2.5a Informational Text Features', '2.6a Sequence in an Informational Text'];


const LessonMenu = (props) => {
  return (
    <div>
      <div style={{fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', width: '90%', padding: '20px', margin: 'auto', marginBottom: '20px', marginTop: '20px'}}>Welcome to Reading Partners!</div>
      <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'baseline'}}>
        {lessons.map((lesson, index) => (
          <div onClick={() => props.onLessonClick(lesson)} key={index} style={{cursor: 'pointer', backgroundColor: '#E29622', borderRadius: '10px', fontSize: '2em', padding: '10px', margin: '20px'}}>{lesson}</div>
          ))
        }
      </div>
    </div>
  );
}

export default LessonMenu;
