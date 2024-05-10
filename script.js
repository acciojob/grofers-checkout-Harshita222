
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
   Create a new element for total price
const totalElement = document.createElement("div");
totalElement.id = "ans"; // Set the id to "ans"
totalElement.textContent = "Total: Rs " + totalPrice;

// Append total price element to the body
document.body.appendChild(totalElement)
  // Get the table
   const table = document.querySelector("table");

  // // Append the new row to the table
   table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
