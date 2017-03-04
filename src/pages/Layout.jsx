
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions.js';
import {SmartCountDisplay} from '../components/CountDisplay';

export const Layout = React.createClass({
	mixins: [PureRenderMixin],
	onInputChange: function(evt) {
		let t = evt.target.value;
		if (t.match(/^-?[0-9]+$/)) {
			this.props.setInterval(parseInt(t));
		}
	},
	inputValue: function() {
		return this.props.interval
	},
	onInputClick: function(evt) {
		evt.target.setSelectionRange(0, evt.target.value.length);
	},
	render: function() {
		return <div>
			<h1>Welcome to increment app</h1><br/>
			Set interval: <input onClick={this.onInputClick.bind(this)} value={this.inputValue()} onChange={this.onInputChange.bind(this)} /><br/><br/>
			<SmartCountDisplay /><br/>
			<Link to="/up">Up increment only</Link><br/>
			<Link to="/down">Down increment only</Link><br/>
			<Link to="/updown">Up & down increment</Link><br/>
		</div>
	}
});

export const SmartLayout = connect((state) => {
	return {
		interval: state.interval
	};
}, actions)(Layout);

