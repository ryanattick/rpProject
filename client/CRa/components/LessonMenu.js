import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';



const LessonMenu = (props) => {
  return (
    <div>
        <div>
          {props.lessons.map((lesson, index) => (
            <Link to='/' style={{color: 'black', textDecoration: 'none', cursor: 'none'}}>
              <div onClick={() => props.onLessonClick(lesson)} key={index} style={{cursor: 'pointer', backgroundColor: props.color, borderRadius: '10px', fontSize: '2em', padding: '10px', margin: '20px', textAlign: 'center'}}>{lesson}</div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

export default LessonMenu;
