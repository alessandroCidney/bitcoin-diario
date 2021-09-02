function findDate() {

	const newDate = new Date();

	const date = newDate.getDate();
	const month = newDate.getMonth() + 1;
	const year = newDate.getFullYear();

	const hour = newDate.getHours();
	const minute = newDate.getMinutes();

	return `${date >= 10 ? date : `0${date}`}/${month >= 10 ? month : `0${month}`}/${year} ${hour}:${minute}h`;
}

module.exports = findDate;