const DateFormat = ({ date, format }) => {
	return new Intl.DateTimeFormat("de-DE", format).format(new Date(date));
};

export default DateFormat;
