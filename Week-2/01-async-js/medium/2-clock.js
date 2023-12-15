// to print in HH:MM::SS (Eg. 13:45:23) format
setInterval(() => {
	const currDate = new Date();
	const hh = currDate.getHours();
	const mm = currDate.getMinutes();
	const ss = currDate.getSeconds();

	console.clear();
	console.log(`${padZero(hh)}:${padZero(mm)}:${padZero(ss)}`);
}, 1000);

// to print in HH:MM::SS AM/PM (Eg 01:45:23 PM) format
setInterval(() => {
	const currDate = new Date();
	let hh = currDate.getHours();
	const mm = currDate.getMinutes();
	const ss = currDate.getSeconds();

	let suffix = hh >= 12 ? "PM" : "AM";
	hh = hh % 12 || 12; // Correct handling for noon and midnight

	console.clear();
	console.log(`${padZero(hh)}:${padZero(mm)}:${padZero(ss)} ${suffix}`);
}, 1000);

function padZero(num) {
	return num < 10 ? `0${num}` : num;
}
