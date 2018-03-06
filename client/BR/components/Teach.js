import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Practice from './Practice';
// import sound from '../../assets/BR2_teach.mp3';



const Teach = () => {

    return (
      <div>
          <div>
            <div style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'space-around'}}>
              <img src='https://i.imgur.com/e8ccOVZ.png' style={{maxHeight: '20%', width: '30%'}}/>
              <img src='https://i.imgur.com/xaoBb0o.png' style={{maxHeight: '20%', width: '30%'}}/>
            </div>
            <div style={{display: 'flex', width: '100%', height: '100%', justifyContent: 'center', marginTop: '20px'}}>
            </div>
            {/* <iframe width="100%" height="265" src="https://clyp.it/abd43km3/widget" frameBorder="0"></iframe> */}
            <ReactAudioPlayer
              src='https://clyp.it/r5wtcutq'
              autoPlay
              loop
            />
            <Link to='./practice' style={{display: 'flex', justifyContent: 'center'}} >
              <button type='button' className='btn btn-success btn-lg'>Let's Practice!</button>
            </Link>
          </div>
      </div>
    );
};

export default Teach;
