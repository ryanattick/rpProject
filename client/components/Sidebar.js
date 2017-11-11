import React, { Component } from 'react';
import Search from './Search.js';


class Sidebar extends Component {


  render() {
    return (
      <div style={{maxWidth: '30%', background: 'red', margin: '20px'}}>
        <Search/>
      </div>
    );
  }
}

export default Sidebar;
