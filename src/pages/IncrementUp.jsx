
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actions from '../actions.js';

import {SmartCountDisplay} from '../components/CountDisplay';
import IncrementButton from '../components/IncrementButton';
import {Link} from 'react-router';

export const IncrementUp = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <div>
			<Link to="/">&lt;&lt; Back home</Link><br/>
			<h1>This is increment up only</h1>
			<SmartCountDisplay />
			<IncrementButton type="Up" {...this.props} />
		</div>;
	}
});

export const SmartIncrementUp = connect((state) => {
	return {
		interval: state.interval
	};
}, actions)(IncrementUp);
