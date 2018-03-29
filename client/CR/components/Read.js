import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

//each letter is going to need it's own tag so that each letter can be clicked on?


class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
       bookChoice: '',
       data: {}
    };
  };

  componentWillMount() {
    this.setState({
      data: this.props.data
    });
  }

  handleBookClick(book) {
    this.setState({
      bookChoice: book
    });
    this.props.getBookChoice(book);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'space-around'}}>
          <div style={{textAlign: 'center', fontSize: '2em', marginBottom: '20px', fontWeight: 'bold'}}>Choose your book.</div><p></p>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            {this.state.data.bookCovers.map((book, index) => (
              <div style={{display: 'flex', flexFlow: 'column wrap', alignItems: 'center'}}>
                <img key={index} src={book[0]} onClick={() => this.handleBookClick(book[1])}  style={{width: '250px', height: '300px', cursor: 'pointer'}}/>
                <div style={{fontSize: '2em', margin: '10px'}}>{book[1]}</div>
              </div>
              ))
            }
          </div>
         {this.state.bookChoice !== '' &&
         <div style={{alignSelf: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
           <Link to='/activity'>
             <RaisedButton style={{margin: '20px'}} label='Next' primary={true}/>
           </Link>
           <img src={this.state.bookChoice} style={{width: '300px', height: '350px', border: '4px solid black', borderRadius: '10px', margin: '20px'}}/>
         </div>
          }
        </div>
      </MuiThemeProvider>
    );
  }
};

export default Read;
