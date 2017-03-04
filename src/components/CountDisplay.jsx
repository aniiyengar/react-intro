
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

export const CountDisplay = React.createClass({
	mixins: [PureRenderMixin],
	render: function() {
		return <p>Current count is: {this.props.value}</p>
	}
});

export const SmartCountDisplay = connect((state) => {
	return {
		value: state.count
	}
})(CountDisplay);
