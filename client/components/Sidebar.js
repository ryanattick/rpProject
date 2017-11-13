import React, { Component } from 'react';
import style from '../style/Sidebar.css'


//Components
import Search from './Search.js';
import PastSearches from './PastSearches.js';

//Material-UI
import Divider from 'material-ui/Divider';


class Sidebar extends Component {


  render() {
    return (
      <div className={style.Sidebar}>
        <Search getSearchResult={this.props.getSearchResult} goToFavorites={this.props.goToFavorites} searchRequest={this.props.searchRequest}/>
        <Divider style={{backgroundColor:'#B82601', marginTop: '30px', height: '5px'}}/>
        <PastSearches searchRequest={this.props.searchRequest} pastSearches={this.props.pastSearches} handleRemovePastSearch={this.props.handleRemovePastSearch} pastSearchClick={this.props.pastSearchClick}/>
      </div>
    );
  }
}

export default Sidebar;
