import React, { Component } from 'react';
import Search from './Search.js';


class PastSearches extends Component {


  render() {
    return (
      <div>
        <div style={{padding: '20px'}}>
          Currently Viewing: {this.props.searchRequest}
        </div>
        {this.props.pastSearches.length > 0 &&
          <div>
            Past Searches:
            {this.props.pastSearches.map((search, index) => (
              <div style={{margin: '20px'}}>{search}</div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default PastSearches;
