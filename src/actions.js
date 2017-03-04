
export function incrementUp() {
	return {
		type: 'incr_up'
	};
};

export function incrementDown() {
	return {
		type: 'incr_down'
	};
};

export function setInterval(iv) {
	return {
		type: 'set_interval',
		data: {
			interval: iv
		}
	}
};
