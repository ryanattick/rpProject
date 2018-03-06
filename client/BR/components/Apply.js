import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

//each letter is going to need it's own tag so that each letter can be clicked on?

const words = ['Sam', 'Matt', 'at', 'sat', 'Sam sat.' ]

const Apply = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        {words.map((word) => (
          <div key={word} style={{ width: '300px', height: '150px', textAlign: 'center', fontSize: '2em', marginBottom: '10px', marginRight: '10px', padding: '30px'}}>
            <div style={{marginBottom: '20px', cursor: 'pointer'}}>{word}</div>
        </div>
        ))}
        <div style={{ width: '100%'}}>
          <Link to='/essentialwords'>
            <button type="button" className="btn btn-success btn-block">Next</button>
          </Link>
        </div>
    </div>
  );
};

export default Apply;
