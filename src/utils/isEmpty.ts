const isEmpty = (value: string | undefined | number | boolean) => {
	return [false, 0, '0', '', 'undefined', undefined].includes(value);
};

export { isEmpty };
