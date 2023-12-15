const fs = require('fs');

// Asynchronous Function
const dataToWrite = "Hello there from Program";
fs.writeFile('a.txt', dataToWrite,'utf-8', (err) => { 
    if (err) {
        console.log("Error is occured",err);
    } else {
        console.log("Data is written to file from Asynchronous Function");
    }
});

// Synchronous Function
try {
    fs.writeFileSync('a.txt', dataToWrite, 'utf-8');
    console.log("Data is written to file from Synchronous Function");
} catch (err) {
    console.log("Error is occured : ",err);
}

// Expensive Function
const syncExpensiveFunction = () => {
    let sum = 0;
    for (let i = 1; i <= 1e7; i++) {
      sum += Math.pow(i, 2);
    }
    return sum;
};

console.log(syncExpensiveFunction());