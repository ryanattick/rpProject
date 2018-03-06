import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, Route} from 'react-router-dom';

const pages = ['https://i.imgur.com/Ql857rT.jpg?1', 'https://i.imgur.com/OOy0vau.jpg?1', 'https://i.imgur.com/DGXEO4R.jpg?1', 'https://i.imgur.com/3ar6Dr1.jpg?1', 'https://i.imgur.com/TeeujBA.jpg?1', 'https://i.imgur.com/meOcQjd.jpg?1', 'https://i.imgur.com/3XF47jV.jpg?1', 'https://i.imgur.com/kSMjoQ6.jpg?1', 'https://i.imgur.com/RGfokkM.jpg?1'];

const ReadingPractice = () => {
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {pages.map((page) => (
        <img key={page} src={page} style={{width: '500px', height: '600px', marginBottom: '15px'}}/>
      ))}
    </div>
  );
};

export default ReadingPractice;
