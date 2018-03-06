import React from 'react';
import ReactDOM from 'react-dom';

const lessons = ['CR2.1a Sequence of Events', 'CR2.2a Story Structure']


const LessonMenu = () => {
  return (
    <div>
      {lessons.map((lesson, index) => (
        <div key={index}>{lesson}</div>
        ))
      }
    </div>
  );
}

export default LessonMenu;
