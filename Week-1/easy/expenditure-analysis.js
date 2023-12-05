/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  let totals = [];

  for (let i = 0; i < transactions.length; i++) { 
    let currentTransaction = transactions[i];
    if (!totals[currentTransaction.category]) {
      totals[currentTransaction.category] = currentTransaction.price;
    } else {
      totals[currentTransaction.category] += currentTransaction.price;
    }
  }

  for (const category in totals) { 
    ans.push({ category: category, totalSpent: totals[category] });
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
