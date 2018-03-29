import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import App from './client/CR/components/App.js';

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('app'));
