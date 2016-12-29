import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

import HomeApp from './home/HomeApp.jsx';
import TransactionsApp from './transactions/TransactionsApp.jsx';

const NotFound = () => <h1>Oooops! Looks like this page does not exist!</h1>;

import './App.scss';

const App = props => (
    <Router history={hashHistory}>
        <Route path='/' component={HomeApp} />
        <Route path='/transactions' component={TransactionsApp} />
        <Route path='*' component={NotFound} />
    </Router>
);

export default App;