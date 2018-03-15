import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//on click state for the videos (can only click next if they've both been watched)

// const data = props.data;
// console.log(data)

class Learn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  };

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <div style={{fontSize: '4em', fontWeight: 'bold'}}>{this.state.data.lessonTitle}</div> <br/>
          <div style={{display: 'flex'}}>
            {this.state.data.learn.media1.includes('youtube') &&
                <iframe src={this.state.data.learn.media1} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '10px'}}></iframe>
            }
            {this.state.data.learn.media1.includes('giphy') &&
              <div>
                <iframe src={this.state.data.learn.media1} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '10px', pointerEvents: 'none'}}></iframe><p></p>
              </div>
            }
            {this.state.data.learn.media2.includes('youtube') &&
                <iframe src={this.state.data.learn.media2} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '10px'}}></iframe>
            }
            {this.state.data.learn.media2.includes('giphy') &&
              <div>
                <iframe src={this.state.data.learn.media2} width="560" height="316" allowFullScreen allow="autoplay; encrypted-media" frameBorder="0" style={{margin: '10px', pointerEvents: 'none'}}></iframe><p></p>
              </div>
            }
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{this.state.data.skillDescription}</div>
            <Link to='/tryitout'>
              <RaisedButton label='Next' primary={true} style={{margin: '10px'}}/>
            </Link>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

};

export default Learn;
