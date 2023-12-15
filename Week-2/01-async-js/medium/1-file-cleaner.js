const fs = require("fs");

fs.readFile("sample.txt", "utf-8", (err, data) => {
	if (err) {
		console.log("Error reading file",err.message);
		return;
    }
    const processedData = data.replace(/\s+/g, ' ');
	fs.writeFile('sample.txt', processedData, 'utf8', (writeErr) => {
        if (writeErr) {
            console.log("Error writing to file",err.message);
        } else {
          console.log('File content has been updated.');
        }
      });
});
