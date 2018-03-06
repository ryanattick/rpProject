import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const Comprehension = () => {
  return (
  <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
    <iframe width="500" height="300" src="https://www.youtube.com/embed/0Wrv_ZviMEc?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={{margin: '10px'}}></iframe>
    <iframe width="500" height="300" src="https://www.youtube.com/embed/LdCOswMeXFQ?rel=0&amp;showinfo=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={{margin: '10px'}}></iframe>
    <button type="button" className="btn btn-info btn-block">Learn More</button>
    <div style={{border: '2px solid black', fontSize: '2em', width: '40%'}}>
      Sam sat.
    </div>
    <div style={{border: '2px solid black', fontSize: '2em', width: '40%'}}>
      Sam sat!
    </div>
    <Link to='/readingpractice'>      
      <button type="button" className="btn btn-success btn-lg">Let's Read!</button>
    </Link>
  </div>
  );
};

export default Comprehension;
