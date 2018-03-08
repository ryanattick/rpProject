import React from 'react';
import ReactDOM from 'react-dom';

const lessons = ['2.1a Sequence of Events', '2.2a Story Structure'];


const LessonMenu = (props) => {
  return (
    <div>
      {lessons.map((lesson, index) => (
        <div onClick={() => props.onLessonClick(lesson)} key={index}>{lesson}</div>
        ))
      }
    </div>
  );
}

export default LessonMenu;
