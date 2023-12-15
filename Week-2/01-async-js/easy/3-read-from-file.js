const fs = require('fs');

// Asynchronous function
fs.readFile('a.txt', 'utf-8', (err, data) => { 
    if (err) {
        console.log("Error reading file : ",err.message);
    } else {
        console.log("Data from the file from Asynchronous function: ",data);
    }
});

// Synchronous function
try {
    const data = fs.readFileSync('a.txt', 'utf-8');
    console.log("Data from the file from Synchronous function : ",data);
} catch (err) { 
    console.log("Error reading file : ",err.message);
}

// Expensive function
const syncExpensiveFunction = () => {
    let sum = 0;
    for (let i = 1; i <= 1e7; i++) {
      sum += Math.pow(i, 2);
    }
    return sum;
};

console.log(syncExpensiveFunction());