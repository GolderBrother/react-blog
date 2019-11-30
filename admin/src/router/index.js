import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Home from '../pages/Home';

function RouterMain(props) {
    return (
        <Router>
            <Route path="/" component={Main} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/home" component={Home} exact />
        </Router>
    )
}

export default RouterMain;