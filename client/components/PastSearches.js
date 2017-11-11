import React, { Component } from 'react';
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';



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
              <div style={{margin: '20px', cursor: 'pointer'}} >
                {search}
                <DeleteForever onClick={this.props.handleRemovePastSearch.bind(this, search)}/>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default PastSearches;
