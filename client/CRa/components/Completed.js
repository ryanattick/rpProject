import React from 'react';
import ReactDOM from 'react-dom';

const lessons = ['2.1a Sequence of Events', '2.2a Story Structure'];


const Completed = (props) => {
  return (
    <div>
      <div style={{fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%', margin: 'auto', marginBottom: '20px'}}>Choose your lesson</div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        {lessons.map((lesson, index) => (
          <div onClick={() => props.onLessonClick(lesson)} key={index} style={{cursor: 'pointer', backgroundColor: '#E29622', borderRadius: '10px', fontSize: '2em', padding: '10px'}}>{lesson}</div>
          ))
        }
      </div>
    </div>
  );
}

export default Completed;
