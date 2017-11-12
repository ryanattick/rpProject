import React, { Component } from 'react';

//Material-UI
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';



class PastSearches extends Component {


  render() {
    return (
      <div>
        {this.props.pastSearches.length > 0 &&
          <div style={{color: '#B82601', fontFamily: 'Roboto, sans-serif', fontSize: '1em', margin:'20px', marginTop:'50px'}}>
            <span style={{fontFamily: 'Roboto, sans-serif', color: 'white'}}>Past Searches:</span>
            {this.props.pastSearches.map((search, index) => (
              <div key={index} style={{margin: '20px', cursor: 'pointer'}}>
                <span onClick={this.props.pastSearchClick.bind(this, search)} style={{fontWeight: 'bold'}}>{search.searchTerm}</span>
                <DeleteForever onClick={this.props.handleRemovePastSearch.bind(this, search)} color='rgba(184,38,1, 0.6)' style={{maxWidth: '7%'}}/>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default PastSearches;
