const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Select all elements with the class "prices"
  const priceElements = document.querySelectorAll(".price");

  let totalPrice = 0;

  // Iterate through price elements
  priceElements.forEach(priceElement => {
    // Convert text content to number and add to totalPrice
    totalPrice += parseInt(priceElement.textContent);
  });

  // Create a new element for total price
  const totalElement = document.createElement("div");
  totalElement.id = "ans"; // Set the id to "ans"
  totalElement.textContent = "Total: Rs " + totalPrice;

  // Append total price element to the body
  document.body.appendChild(totalElement);
};

getSumBtn.addEventListener("click", getSum);