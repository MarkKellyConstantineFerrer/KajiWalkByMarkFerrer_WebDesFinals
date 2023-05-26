document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", calculateTotal);
    });
  });
  
  function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let total = 0;
  
    checkboxes.forEach((checkbox) => {
      const price = parseFloat(checkbox.dataset.price);
      total += price;
    });
  
    displayTotal(total);
  }
  
  function displayTotal(total) {
    const cartContainer = document.getElementById("cartContainer");
    cartContainer.textContent = `Total: $${total.toFixed(2)}`;
  }
  
  function submitOrder(event) {
    event.preventDefault();
    const total = parseFloat(document.getElementById("cartContainer").textContent.replace("Total: $", ""));
    alert(`Purchase success! Thank you for your order! Your order total is: $${total.toFixed(2)} Your order is confirmed and will be shipped to you soon!`);
    document.getElementById("orderForm").reset();
    displayTotal(0);
  }
  