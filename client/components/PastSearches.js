import React, { Component } from 'react';

//Material-UI
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';



class PastSearches extends Component {


  render() {
    return (
      <div>
        <div style={{margin: '20px', color: 'white', fontSize: '1.25em', fontFamily: 'Roboto, sans-serif'}}>
          <span style={{fontFamily: 'Roboto, sans-serif', color: 'white'}}>Currently Viewing:</span> <span style={{fontWeight: 'bold' }}>{this.props.searchRequest}</span>
        </div>
        {this.props.pastSearches.length > 0 &&
          <div style={{color: '#B82601', fontFamily: 'Roboto, sans-serif', fontSize: '1em', margin:'20px', marginTop:'50px'}}>
            <span style={{fontFamily: 'Roboto, sans-serif', color: 'white'}}>Past Searches:</span>
            {this.props.pastSearches.map((search, index) => (
              <div key={index} style={{margin: '20px', cursor: 'pointer'}} onClick={this.props.pastSearchClick.bind(this, search)}>
                <span style={{fontWeight: 'bold'}}>{search.searchTerm}</span>
                <DeleteForever onClick={this.props.handleRemovePastSearch.bind(this, search)} color='#B82601' style={{maxWidth: '7%'}}/>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }
}

export default PastSearches;
