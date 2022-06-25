import { format, isSameMonth } from 'date-fns';
import ptPT from 'date-fns/locale/pt';

const returnDate = (value: Date | string) => {
	console.log(typeof value === 'string');
	if (typeof value === 'string') {
		return new Date(value);
	}

	return value;
};

const getDurationDate = (start: Date | string, end: Date | string): string => {
	const dateFnsOptions = {
		locale: ptPT
	};

	const startDay = format(returnDate(start), 'dd', dateFnsOptions);
	const startMonth = format(returnDate(start), 'MMMM', dateFnsOptions);
	const endDay = format(returnDate(end), 'dd', dateFnsOptions);
	const endMonth = format(returnDate(end), 'MMMM', dateFnsOptions);

	return isSameMonth(returnDate(start), returnDate(end))
		? `De ${startDay} a ${endDay} de ${startMonth}`
		: `De ${startDay} de ${startMonth} a ${endDay} de ${endMonth}`;
};

export { getDurationDate };
