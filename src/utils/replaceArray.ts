const replaceArray = (value: string, find: string[], replace: string) => {
	for (var i = 0; i < find.length; i++) {
		const regex = new RegExp(find[i], 'g');
		value = value.replace(regex, replace);
	}

	return value;
};

export { replaceArray };
