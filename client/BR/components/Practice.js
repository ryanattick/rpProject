import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import BlockIcon from 'material-ui/svg-icons/content/block';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import { GridTile } from 'material-ui/GridList';


//clicking on TRY AGAIN button should not take you to the next section. Maybe it should reset the pictures that were in the w

const images = [
  {id: 'seal', source: 'https://i.imgur.com/k7RKsMN.jpg'},
  {id: 'turtle', source: 'https://i.imgur.com/Q7eJDSN.jpg'},
  {id: 'mouse', source: 'https://i.imgur.com/itSGwF7.jpg'},
  {id: 'tiger', source: 'https://i.imgur.com/duN54aM.jpg'},
  {id: 'lion', source: 'https://i.imgur.com/poz6Itm.jpg'},
  {id: 'snake', source: 'https://i.imgur.com/q9PErTe.jpg'}
];


class Practice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sCol: [],
      tCol: [],
      noneCol: [],
    };
  };


 chooseColumn(stateType, type) {
    stateType.push(images[0]);
    this.setState({
      [type] : stateType
    }, () => {this.checkAnswers()});
    images.splice(0, 1);
  };

  mapImages(type) {
    if (type.length === 0) {
      return (
        <div></div>
      );
    } else {
      return (
        type.map((image, index) => (
          <div>
            {/* <img
              key={image.id}
              src={image.source}
              style={{height: '200px', width: '200px', cursor: 'pointer', marginBottom: '10px', borderRadius: '10px'}}
              onClick={() => {this.moveImage(image, index, type)}}
            /> */}

                <GridTile style={{backgroundImage: `url(${image.source})`, backgroundSize: 'cover', height: '150px', width: '150px', border: 'none', borderRadius: '2px', boxShadow: '0 0 10px black', margin: '20px'}}>
                  <IconButton onClick={() => {this.moveImage(image, index, type)}} style={{float: 'right'}}>
                    <ClearIcon hoverColor='red' color="rgba(57, 62, 65, 0.55)" style={{float: 'right', margin: '10px'}}/>
                  </IconButton>
                </GridTile>
          </div>
        ))
      );
    }
  };

  moveImage(image, index, type) {
    images.push(image);
    type.splice(index, 1);
    this.setState({
      tCol: this.state.tCol,
      sCol: this.state.sCol,
      noneCol: this.state.noneCol
    });
  };

  checkAnswers() {
    let sColFlag = false;
    let tColFlag = false;
    let noneColFlag = false;

    if (this.state.sCol.length > 1) {
      for (let i = 0; i < this.state.sCol.length; i++) {
        if ((Object.values(this.state.sCol[0]).includes('seal') && Object.values(this.state.sCol[1]).includes('snake')) || (Object.values(this.state.sCol[0]).includes('snake') && Object.values(this.state.sCol[1]).includes('seal'))) {
          sColFlag = true;
        }
      }
    }
    if (this.state.tCol.length > 1) {
      for (let i = 0; i < this.state.tCol.length; i++) {
        if ((Object.values(this.state.tCol[0]).includes('tiger') && Object.values(this.state.tCol[1]).includes('turtle')) || (Object.values(this.state.tCol[0]).includes('turtle') && Object.values(this.state.tCol[1]).includes('tiger'))) {
          tColFlag = true;
        }
      }
    }
    if (this.state.noneCol.length > 1) {
      for (let i = 0; i < this.state.noneCol.length; i++) {
        if ((Object.values(this.state.noneCol[0]).includes('mouse') && Object.values(this.state.noneCol[1]).includes('lion')) || (Object.values(this.state.noneCol[0]).includes('lion') && Object.values(this.state.noneCol[1]).includes('mouse'))) {
          noneColFlag = true;
        }
      }
    }
    if (sColFlag && tColFlag && noneColFlag) {
      return true;
    } else {
      return false;
    }
  }

  rotateThroughImages() {
    while (images.length > 0) {
      return (
        <div style={{fontSize: '2em', textAlign: 'center', color: '#E89C22'}}>
          <div>
            What letter does
          </div>
          <img
            src={images[0].source}
            style={{height: '200px', width: '200px', margin: 'auto', borderRadius: '10px'}}
          />
          <div>
            start with?
            <div>
              <button
                type="button"
                className="btn btn-info btn-lg"
                style={{margin: '10px'}}
                onClick={() => {this.chooseColumn(this.state.sCol, 'sCol')}}
                >S</button>
                <button
                  type="button"
                  className="btn btn-light btn-lg"
                  style={{margin: '10px'}}
                  onClick={() => {this.chooseColumn(this.state.noneCol, 'noneCol')}}
                  >
                    <BlockIcon color='red'/>
                  </button>
                <button
                  type="button"
                  className="btn btn-info btn-lg"
                  onClick={() => {this.chooseColumn(this.state.tCol, 'tCol')}}
                  style={{margin: '10px'}}
                  >T</button>
              </div>
          </div>
        </div>
      );
    }
    if (this.checkAnswers()) {
      return (
        <Link to='./apply'>
          <button type='button' className='btn btn-success btn-block'>Great work!</button>
        </Link>
      )
    } else {

      return (
        <div style={{color: '#E89C22', fontSize: '1.5em'}}>
          Hmm. Check your answers.
        </div>
      );
    }
  }



  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-bewteen'}}>
            <div style={{padding: '20px', backgroundColor: '#204E73', marginBottom: '20px', borderRadius: '10px', paddingLeft: '300px', paddingRight: '300px'}}>
              {this.rotateThroughImages()}
              {/* {this.renderButtons()} */}
                  </div>
                </div>
                <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignContent: 'space-bewteen'}}>
                  <div style={{minHeight: '450px', width: '30%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <img src='https://i.imgur.com/xVuyPUQ.png' style={{maxHeight: '19%', maxWidth: '19%'}}/>
                    {this.mapImages(this.state.sCol)}
                  </div>
                  <div style={{minHeight: '450px', width: '30%', borderLeft: '2px solid black', borderRight: '2px solid black', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <img src='https://i.imgur.com/qBQN5hr.jpg' style={{maxHeight: '10%', maxWidth: '10%'}}/>
                    {this.mapImages(this.state.noneCol)}
                  </div>
                  <div style={{minHeight: '450px', width: '30%', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <img src='https://i.imgur.com/11HmZUQ.png' style={{maxHeight: '19%', maxWidth: '19%'}}/>
                    {this.mapImages(this.state.tCol)}
                  </div>
                </div>
              </div>
      </MuiThemeProvider>
    );
  };
};

export default Practice;
