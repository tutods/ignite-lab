interface String {
	replaceArray: (find: string[], replace: string) => string;
}

String.prototype.replaceArray = function (find, replace) {
	let replaceString: string = String(this);

	for (var i = 0; i < find.length; i++) {
		const regex = new RegExp(find[i], 'g');
		replaceString = replaceString.replace(regex, replace);
	}

	return replaceString;
};
