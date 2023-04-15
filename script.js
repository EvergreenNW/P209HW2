document.addEventListener("DOMContentLoaded", function (event) {


  let total = 0;
  let totalAmount = document.querySelector('h3');
  let selectedSize = 0;
  let selectedToppings = 0;
  
  document.addEventListener('click', calculate());
  
  function size() {
    if (button.value === 'small') {
      let selectedSize = 7;
    } else if (button.value === 'medium') {
      let selectedSize = 10;
    } else {
      let selectedSize = 14;
  }
    
  function toppings() {
    if (toppings.value === 'none') {
      let selectedToppings = 0;
    } else if (toppings.value === 'one') {
      let selectedToppings = 2;
    } else {
      let selectedToppings = 3;
    }
  }
  
  function calculate() {
    let total = selectedSize + selectedToppings;
    console.log (total);
    totalAmount.textContent = "Your total is: $" + total;
    document.getElementById(total).innerHTML;
  }

}
});