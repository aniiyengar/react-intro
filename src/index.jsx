
import reducer from './reducer.js';
import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Route, Router, hashHistory} from 'react-router';

import App from './pages/App';
import {SmartIncrementUp} from './pages/IncrementUp';
import {SmartIncrementDown} from './pages/IncrementDown';
import {SmartIncrementUpDown} from './pages/IncrementUpDown';
import {SmartLayout} from './pages/Layout';

var store = createStore(reducer, {
	count: 20,
	interval: 5
});

var routes = <Route component={App}>
	<Route path="/" component={SmartLayout} />
	<Route path="/up" component={SmartIncrementUp} />
	<Route path="/down" component={SmartIncrementDown} />
	<Route path="/updown" component={SmartIncrementUpDown} />
</Route>

ReactDOM.render(
	<Provider store={store}>
		<Router hashHistory={hashHistory}>
			{routes}
		</Router>
	</Provider>,
	document.getElementById('app')
);

