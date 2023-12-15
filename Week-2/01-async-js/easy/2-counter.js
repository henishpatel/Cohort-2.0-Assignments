let count = 0;

function incrementAndDisplay() {
	console.log(count);
	count++;

	setTimeout(incrementAndDisplay, 1000);
}

incrementAndDisplay();
