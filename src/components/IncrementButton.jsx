
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
	fn: function() {
		return this.props['increment' + this.props.type]();
	},
	render: function () {
		return <button onClick={() => this.fn()}>
			{this.props.type} by {this.props.interval}
			
		</button>;
	}
});

