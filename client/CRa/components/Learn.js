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
          <div style={{fontSize: '4em', fontWeight: 'bold'}}>{this.state.data.learn[0]}</div> <br/>
          <div style={{display: 'flex'}}>
            <iframe width="560" height="315" src={this.state.data.learn[1]} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={{margin: '10px'}}></iframe>
            <iframe width="560" height="315" src={this.state.data.learn[2]} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen style={{margin: '10px'}}></iframe>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%'}}>{this.state.data.learn[3]}</div>
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
