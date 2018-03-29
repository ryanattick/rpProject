import React from 'react';
import ReactDOM from 'react-dom';

const LessonComplete = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{fontSize: '3em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{props.data.lessonComplete[0]}</div>
      <iframe src={props.data.lessonComplete[1]} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '20px', pointerEvents: 'none'}}></iframe>
    </div>
  );
}

export default LessonComplete;
