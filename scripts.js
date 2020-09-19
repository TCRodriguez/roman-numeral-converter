
function convertToRoman(num) {

  // This will eventually hold the resulting roman numeral as a string
  let numHolder;

  /* Takes the number and turns it into a string, throws it into an array, and then turns each string
  back into an integer */
  let numString = num.toString();
  let numStringArray = [];
  for(let i = 0; i < numString.length; i++){
    numStringArray.push(numString[i]);
  }

  /* This is the array that will be worked through element by element to get it
  converted into a roman numeral */
  let numIntArray = numStringArray.map(element => parseInt(element))


  // These will be used to represent each digit in the whole number
  let thousands = "";
  let hundreds = "";
  let tens = "";
  let ones = "";


  /* This process will repeat: identy position of digit and the number it represents (hundreds, tens, etc.)
  and replace it with the appropriate roman numeral */

  // ================================ //
  //      Number in the Thousands
  // ================================ //
  if(numIntArray.length == 4){
    console.log("'num' is a number in the thousands")

    // Thousands place
    for(let i = numIntArray[0]; i > 0; i--){
      thousands += "M";
      numIntArray[0] = thousands;
    }


    // Hundreds place
    if((numIntArray[1] * 100) < 400){
      hundreds = "C".repeat(numIntArray[1])
      numIntArray[1] = hundreds;
    } else if((numIntArray[1] * 100) == 400){
      hundreds = "CD";
      numIntArray[1] = hundreds;
    } else if((numIntArray[1] * 100) == 500){
      hundreds = "D";
      numIntArray[1] = hundreds;
    } else if((numIntArray[1] * 100) > 500 && numIntArray[1] * 100 != 900){
      hundreds = "D".concat("C".repeat(numIntArray[1] - 5))
      numIntArray[1] = hundreds;
    } else if((numIntArray[1] * 100) == 900){
      hundreds = "CM";
      numIntArray[1] = hundreds;
    }

    // Tens place
    if((numIntArray[2] * 10) < 40){
      tens = "X".repeat(numIntArray[2])
      numIntArray[2] = tens;
    } else if((numIntArray[2] * 10) == 40){
      tens = "XL";
      numIntArray[2] = tens;
    } else if((numIntArray[2] * 10) == 50){
      tens = "L";
      numIntArray[2] = tens;
    } else if((numIntArray[2] * 10) > 50 && numIntArray[2] * 10 != 90){
      tens = "L".concat("X".repeat(numIntArray[2] - 5))
      numIntArray[2] = tens;
    } else if((numIntArray[2] * 10) == 90){
      tens = "XC";
      numIntArray[2] = tens;
    }

    // Ones place
    if(numIntArray[3] == 4){
      ones = "IV";
      numIntArray[3] = ones;
    } else if(numIntArray[3] == 5){
      ones = "IV";
      numIntArray[3] = ones;
    } else if(numIntArray[3] == 6){
      ones = "VI";
      numIntArray[3] = ones;
    } else if(numIntArray[3] > 6 && numIntArray[3] < 9){
      ones = "V".concat("I".repeat(numIntArray[3] - 5));
      numIntArray[3] = ones;
    } else if(numIntArray[3] < 4){
      ones = "I".repeat(numIntArray[3])
      numIntArray[3] = ones;
    } else if(numIntArray[3] == 9){
      ones = "IX"
      numIntArray[3] = ones;
    }

// ================================ //
//      Number in the Hundreds
// ================================ //
    
  } else if(numIntArray.length == 3) {
    console.log("'num' is a number in the hundreds")

    if((numIntArray[0] * 100) < 400){
      hundreds = "C".repeat(numIntArray[0])
      numIntArray[0] = hundreds;
    } else if((numIntArray[0] * 100) == 400){
      hundreds = "CD";
      numIntArray[0] = hundreds;
    } else if((numIntArray[0] * 100) == 500){
      hundreds = "D";
      numIntArray[0] = hundreds;
    } else if((numIntArray[0] * 100) > 500 && numIntArray[0] * 100 != 900){
      hundreds = "D".concat("C".repeat(numIntArray[0] - 5))
      numIntArray[0] = hundreds;
    } else if((numIntArray[0] * 100) == 900){
      hundreds = "CM";
      numIntArray[0] = hundreds;
    }

    // Tens place
    if((numIntArray[1] * 10) < 40){
      tens = "X".repeat(numIntArray[1])
      numIntArray[1] = tens;
    } else if((numIntArray[1] * 10) == 40){
      tens = "XL";
      numIntArray[1] = tens;
    } else if((numIntArray[1] * 10) == 50){
      tens = "L";
      numIntArray[1] = tens;
    } else if((numIntArray[1] * 10) > 50 && numIntArray[1] * 10 != 90){
      tens = "L".concat("X".repeat(numIntArray[1] - 5))
      numIntArray[1] = tens;
    } else if((numIntArray[1] * 10) == 90){
      tens = "XC";
      numIntArray[1] = tens;
    }

    // Ones place
    if(numIntArray[2] == 4){
      ones = "IV";
      numIntArray[2] = ones;
    } else if(numIntArray[2] == 5){
      ones = "V";
      numIntArray[2] = ones;
    } else if(numIntArray[2] == 6){
      ones = "VI";
      numIntArray[2] = ones;
    } else if(numIntArray[2] > 6 && numIntArray[2] < 9){
      ones = "V".concat("I".repeat(numIntArray[2] - 5))
      numIntArray[2] = ones;
    } else if(numIntArray[2] < 4){
      ones = "I".repeat(numIntArray[2])
      numIntArray[2] = ones;
    } else if(numIntArray[2] == 9){
      ones = "IX"
      numIntArray[2] = ones;
    }
 


// ================================ //
//      Number in the Tens
// ================================ //
  } else if(numIntArray.length == 2) {

    // Tens place
    if((numIntArray[0] * 10) < 40){
      tens = "X".repeat(numIntArray[0])
      numIntArray[0] = tens;
    } else if((numIntArray[0] * 10) == 40){
      tens = "XL";
      numIntArray[0] = tens;
    } else if((numIntArray[0] * 10) == 50){
      tens = "L";
      numIntArray[0] = tens;
    } else if((numIntArray[0] * 10) > 50 && numIntArray[0] * 10 != 90){
      tens = "L".concat("X".repeat(numIntArray[0] - 5))
      numIntArray[0] = tens;
    } else if((numIntArray[0] * 10) == 90){
      tens = "XC";
      numIntArray[0] = tens;
    }

    // Ones place
    if(numIntArray[1] == 4){
      ones = "IV";
      numIntArray[1] = ones;
    } else if(numIntArray[1] == 5){
      ones = "V";
      numIntArray[1] = ones;
    } else if(numIntArray[1] == 6){
      ones = "VI";
      numIntArray[1] = ones;
    } else if(numIntArray[1] > 6 && numIntArray[1] < 9){
      ones = "V".concat("I".repeat(numIntArray[1] - 5))
      numIntArray[1] = ones;
    } else if(numIntArray[1] < 4){
      ones = "I".repeat(numIntArray[1])
      numIntArray[1] = ones;
    } else if(numIntArray[1] == 9){
      ones = "IX"
      numIntArray[1] = ones;
    }
  
    console.log(numIntArray)
    console.log(ones)

  // ================================ //
  //      Number in the Ones
  // ================================ //
  } else if(numIntArray.length == 1) {
    console.log("'num' is a number in the ones")
    // Ones place
    if(numIntArray[0] == 4){
      ones = "IV";
      numIntArray[0] = ones;
    } else if(numIntArray[0] == 5){
      ones = "V";
      numIntArray[0] = ones;
    } else if(numIntArray[0] == 6){
      ones = "VI";
      numIntArray[0] = ones;
    } else if(numIntArray[0] > 6 && numIntArray[0] < 9){
      ones = "V".concat("I".repeat(numIntArray[0]))
    } else if(numIntArray[0] < 4){
        ones = "I".repeat(numIntArray[0])
        numIntArray[0] = ones;
    } else if(numIntArray[0] == 9){
      ones = "IX"
      numIntArray[0] = ones;
    }
  }

  // Get rid of any zeroes, or empty spaces, in the array of roman numerals
  for(var i = 0; i < numIntArray.length; i++){
    if(numIntArray[i] === ""){
      numIntArray.splice(i, 1)
    }
  }

  // Join the array together to get the final converted number as a roman numeral
  numHolder = numIntArray.join("")

  return numHolder;
}

let convertButton = document.getElementById("convert-button");
let resetButton = document.getElementById("reset-button")
let userInput = document.getElementById("user-input");

convertButton.addEventListener("click", function(){
  if(userInput.value < 1 || userInput.value > 9999 || userInput.value % 1 !== 0){
    alert("Please choose a whole number between 1 and 9999");
  } else {
    userInput.setAttribute("type", "text")
    userInput.value = convertToRoman(userInput.value);
    convertButton.setAttribute("hidden", true)
    resetButton.removeAttribute("hidden")
    userInput.setAttribute("readonly", "readonly")
  }
});

resetButton.addEventListener("click", function(){
  convertButton.removeAttribute("hidden")
  resetButton.setAttribute("hidden", true)
  userInput.setAttribute("type", "number")
  userInput.setAttribute("placeholder", "Type in a number...")
  userInput.value=null;
  userInput.removeAttribute("readonly")
});