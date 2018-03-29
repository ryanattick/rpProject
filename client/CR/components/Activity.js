import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Activity extends Component {
    constructor(props) {
      super(props);
      this.state = {
        heading1: '',
        subheading1a: '',
        subheading1b: '',
        heading2: '',
        subheading2a: '',
        subheading2b: '',
        heading3: '',
        subheading3a: '',
        subheading3b: '',
        heading4: '',
        subheading4a: '',
        subheading4b: '',
        data: {}
      };
    };


  handleTextChange(state, event) {
    this.setState({
      [state]: event.target.value
    })
  }

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {

    const tutor = 'The TUTOR should type these answers so the student can focus on the content.';

    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', flexWrap: 'wrap', width: '80%', margin: 'auto'}}>
          <div style={{fontSize: '2em', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#6B92B1', borderRadius: '10px', width: '80%', alignSelf: 'center', marginBottom: '20px'}}>{this.state.data.skillDescription}</div>
          <div style={{fontSize: '2em', padding: '20px', alignSelf: 'center'}}><strong>Directions: </strong>{this.state.data.activity.directions}</div>
          <div style={{fontSize: '1.5em', marginBottom: '10px', alignSelf: 'center'}}><em>{this.state.data.subdirections || tutor}</em></div>
          <div style={{width: '500px', height: '500px', background: 'aqua', border: '2px solid #204E73', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('heading1', event)}
              hintText={this.state.data.activity.heading1}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
              style={{marginBottom: '40px'}}
            />
            {this.state.data.activity.subheading1.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading1a', event)}
              hintText={this.state.data.activity.subheading1}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
              />
            }
            {this.state.data.activity.subheading2.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading1b', event)}
              hintText={this.state.data.activity.subheading2}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
              />
            }
          </div>
          <div style={{width: '500px', height: '500px', background: '#f4c242', border: '2px solid #E29622', borderRadius: '50%', alignSelf: 'flex-start', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('heading2', event)}
              hintText={this.state.data.activity.heading2}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            {this.state.data.activity.subheading1.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading2a', event)}
              hintText={this.state.data.activity.subheading1}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
              />
            }
            {this.state.data.activity.subheading2.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading2b', event)}
              hintText={this.state.data.activity.subheading2}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
              />
            }
          </div>
          <div style={{width: '500px', height: '500px', background: 'aqua', border: '2px solid #204E73', borderRadius: '50%', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('heading3', event)}
              hintText={this.state.data.activity.heading3}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            {this.state.data.activity.subheading1.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading3a', event)}
              hintText={this.state.data.activity.subheading1}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
              />
            }
            {this.state.data.activity.subheading2.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading3b', event)}
              hintText={this.state.data.activity.subheading2}
              underlineFocusStyle={{borderColor: '#E29622'}}
              hintStyle={{color: '#204E73'}}
              multiLine={true}
              rows={2}
              />
            }
          </div>
          <div style={{width: '500px', height: '500px', background: '#f4c242', border: '2px solid #E29622', borderRadius: '50%', alignSelf: 'flex-start', display: 'flex', justifyContent: 'center', flexFlow: 'column wrap', alignItems: 'center'}}>
            <TextField
              onChange={(event) => this.handleTextChange('heading4', event)}
              hintText={this.state.data.activity.heading4}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              style={{marginBottom: '40px'}}
              multiLine={true}
              rows={2}
            />
            {this.state.data.activity.subheading1.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading4a', event)}
              hintText={this.state.data.activity.subheading1}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
              />
            }
            {this.state.data.activity.subheading2.length > 0 &&
              <TextField
              onChange={(event) => this.handleTextChange('subheading4b', event)}
              hintText={this.state.data.activity.subheading2}
              underlineFocusStyle={{borderColor: '#204E73'}}
              hintStyle={{color: '#E29622'}}
              multiLine={true}
              rows={2}
              />
            }
          </div>
          {this.state.heading1.length > 0 && this.state.heading2.length > 0 && this.state.heading3.length > 0 && this.state.heading4.length > 0 && this.state.data.subdirections &&
            <Link to='/quiz'>
              <RaisedButton style={{marginBottom: '20px'}} label='Done' primary={true} onClick={() => this.props.getActivityAnswers({
                heading1: [this.state.data.activity.heading1, this.state.heading1],
                subheading1a: [this.state.data.activity.subheading1, this.state.subheading1a],
                subheading1b: [this.state.data.activity.subheading2, this.state.subheading1b],
                heading2: [this.state.data.activity.heading2, this.state.heading2],
                subheading2a: [this.state.data.activity.subheading1, this.state.subheading2a],
                subheading2b: [this.state.data.activity.subheading2, this.state.subheading2b],
                heading3: [this.state.data.activity.heading3, this.state.heading3],
                subheading3a: [this.state.data.activity.subheading1, this.state.subheading3a],
                subheading3b: [this.state.data.activity.subheading2, this.state.subheading3b],
                heading4: [this.state.data.activity.heading4, this.state.heading4],
                subheading4a: [this.state.data.activity.subheading1, this.state.subheading4a],
                subheading4b: [this.state.data.activity.subheading2, this.state.subheading4b]
              })}/>
            </Link>

          }
          {this.state.heading1.length > 0 && this.state.heading2.length > 0 && this.state.heading3.length > 0 && this.state.heading4.length > 0 && !this.state.data.subdirections &&
            <RaisedButton style={{marginBottom: '20px'}} label='Done!' primary={true} onClick={() => this.props.getActivityAnswers({
              heading1: [this.state.data.activity.heading1, this.state.heading1],
              subheading1a: [this.state.data.activity.subheading1, this.state.subheading1a],
              subheading1b: [this.state.data.activity.subheading2, this.state.subheading1b],
              heading2: [this.state.data.activity.heading2, this.state.heading2],
              subheading2a: [this.state.data.activity.subheading1, this.state.subheading2a],
              subheading2b: [this.state.data.activity.subheading2, this.state.subheading2b],
              heading3: [this.state.data.activity.heading3, this.state.heading3],
              subheading3a: [this.state.data.activity.subheading1, this.state.subheading3a],
              subheading3b: [this.state.data.activity.subheading2, this.state.subheading3b],
              heading4: [this.state.data.activity.heading4, this.state.heading4],
              subheading4a: [this.state.data.activity.subheading1, this.state.subheading4a],
              subheading4b: [this.state.data.activity.subheading2, this.state.subheading4b]
            })}/>
            }
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Activity;
