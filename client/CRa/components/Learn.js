import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import lessonData from '../../../lessonData';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//on click state for the videos (can only click next if they've both been watched)

const learn = lessonData.CR21a.learn;

const Learn = () => {
  return (
    <MuiThemeProvider>
      <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
        <div style={{fontSize: '4em', fontWeight: 'bold'}}>{learn[0]}</div> <br/>
        <div style={{display: 'flex'}}>
          <iframe width="560" height="315" src={learn[1]} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={{margin: '10px'}}></iframe>
          <iframe width="560" height="315" src={learn[2]} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={{margin: '10px'}}></iframe>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{learn[3]}</div>
          <Link to='/tryitout'>
            <RaisedButton label='Next' primary={true} style={{margin: '10px'}}/>
          </Link>
        </div>
      </div>
    </MuiThemeProvider>
  );
};

export default Learn;
