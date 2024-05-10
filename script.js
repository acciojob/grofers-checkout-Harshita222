// const getSumBtn = document.createElement("button");
// getSumBtn.append("Get Total Price");
// document.body.appendChild(getSumBtn);

// const getSum = () => {
// //Add your code here
  
// };

// getSumBtn.addEventListener("click", getSum);

const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with the class "price"
  const priceElements = document.querySelectorAll(".prices");

  let totalPrice = 0;

  // Iterate through price elements
  priceElements.forEach(priceElement => {
    // Convert text content to number and add to totalPrice
    totalPrice += parseInt(priceElement.textContent);
  });

  // Create a new row for total price
  const newRow = document.createElement("tr");

  // Create a cell for total price
  const totalCell = document.createElement("td");
  totalCell.textContent = "Total: Rs " + totalPrice;

  // Set colspan attribute to span the cell across two columns
  totalCell.setAttribute("colspan", "2");

  // Append total price cell to the new row
  newRow.appendChild(totalCell);

  // Get the table
  const table = document.querySelector("table");

  // Append the new row to the table
  table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
