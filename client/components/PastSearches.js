import React, { Component } from 'react';
import style from '../style/PastSearches.css';

//Material-UI
import DeleteForever from 'material-ui/svg-icons/action/delete-forever';



class PastSearches extends Component {


  render() {
    return (
      <div>
        {this.props.pastSearches.length > 0 &&
          <div className={style.PastSearches}>
            <span style={{color: 'white'}}>Past Searches:</span>
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
