
export default function(state = {}, action) {
	if (!action.type) return state;

	if (action.type == 'incr_up') {
		return {
			count: state.count + state.interval,
			interval: state.interval
		};
	}
	else if (action.type == 'incr_down') {
		return {
			count: state.count - state.interval,
			interval: state.interval
		};
	}
	else if (action.type == 'set_interval') {
		return {
			count: state.count,
			interval: action.data.interval
		};
	}
	else return state;
};
