# P209HW2
Programming 209 - Homework 2

Instructions for this Assignment: 

Go to GitHub and create a repo, I suggest calling it P209HW2
Then using local git, clone that.  
Open the new folder and add an HTML, CSS, and JS file.
Code the HTML to use a Form.  

The form should have a set of 3 radio buttons where the user can specify a pizza size of small, medium, or large.

a dropdown feature (a select) where they can specify if they want no toppings, one topping, or 2 toppings. 

There should be a form submit button

When the user clicks the submit, your JS code should calculate the price and show it to the user.

Use this pricing.  
	Small $7.00
	Medium  $10.00
	Large  $14.00
	1 topping  $2.00
	2 toppings $3.00

When you have debugged the project, do the 

git add *

git commit -m “first submission of pizza program

git push

Submit the URL of your GitHub Repo

HTML ________________________

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

  <form onsubmit="return false">

    <fieldset id="custInfo">
      
      <legend><h2>Customize your Pizza</h2></legend>

      <label id="size">What size would you like your pizza?</label>
      <label for="small">Small</label>
      <input type="radio" name="size" value = "small" id="small" onclick="size(this);">
      <label for="medium">Medium</label>
      <input type="radio" name="size" value ="medium" id="medium" onclick="size(this);">
      <label for="large">Large</label>
      <input type="radio" name="size" value ="large" id="large" onclick="size(this);">
      
      <label for="toppings">How many toppings would you like?</label>
      <select name="toppings" id="toppings" size="1">
        <option value="None"> None</option>
        <option value="One" selected="selected"> One topping</option>
        <option value="Two"> Two toppings</option>
      </select>
      
    </fieldset>
  </form>

  <div id="total">
      <button onclick="calculate()">Submit</button>
      <h3>Your Total is: </h3>
  </div>


  
    <script src="script.js"></script>
</body>
</html>



CSS______________________________________

fieldset {
      background-color: rgb(242, 242, 242);
      border: 1px solid rgb(89, 86, 84);
      margin-left: auto;
      margin-right: auto;
      width: 46%;
    }

    legend {
      background-color: rgb(59, 59, 59);
      color: white;
      padding: 3px 0px;
      text-align: center;
      width: 75%;
    }

    label {
      clear: left;
      display: block;
      float: left;
      font-size: 0.9em;
      margin: 7px 4% 7px 5px;
      width: 40%;
    }

    input {
      display: block;
      float: left;
      font-size: 0.9em;
      margin: 7px 0px;
      width: 50%;
    }

    #state {
      width: 50px;
    }

    select {
      display: block;
      float: left;
      font-size: 0.9em;
      margin: 7px 0px;

    }

    /* #correct {
      font-size: 0.9em;
      background-color: rgba(233, 70, 0, 0.65);
      width: 48%;

    } */

#total {
      background-color: rgb(59, 59, 59);
      border: 1px solid rgb(59, 59, 59);
      color: white;
      padding: 10px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      width: 40%;
}


JAVASCRIPT ____________________________

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











