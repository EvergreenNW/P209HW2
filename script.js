
function calculate() {
  let radio = document.getElementsByName('size');
  for(i = 0; i < radio.length; i++) {
    if(radio[i].checked)
      console.log(radio[i].value);
  }

  let select = document.getElementsByName('toppings');
  console.log(select.value);
}

// I couldn't figure out how to merge the two values together to make a total. 
// The value of the drop-down menu keeps showing up as "undefined".
// I'll keep trying things out in the meantime. Thanks so much for your help!

