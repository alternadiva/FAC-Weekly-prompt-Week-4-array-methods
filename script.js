// Defining some arrays

let numbersOne = [1, 4, 5, 7];
let numbersTwo = [23, 4, 65, 12];
let numbersThree = [1, 2];

// Write a function which doubles the number it's given

function doubleNum(num) {
  return num * 2;
}

// Write a function which multiplies the first num, by the second

function multiply(num1, num2) {
  return num1 * num2;
}

// Use the map method, to call the doubleNum function

const map1Arrow = numbersOne.map((element) => element * 2);

const map1Callback = numbersOne.map(doubleNum);

const map1InlineCallback = numbersOne.map(function timesTwo(element) {
  return element * 2;
});

// Use the map method to multiply the element by its index

const mapOne = numbersOne.map(multiply);
const mapTwo = numbersTwo.map(multiply);
const mapThree = numbersThree.map(multiply);

// 2. Use the filter method to fill an array with the numbers which are divisible by two

function divideByTwo (num) {
    return num % 2 === 0;
}

const filterOne = numbersOne.filter(divideByTwo);
const filterTwo = numbersTwo.filter(divideByTwo);
const filterThree = numbersThree.filter(divideByTwo);

// 3. Use the reduce method, to return the total of each array

function sumArr (num1, num2) {
    return num1 + num2;
}

const reduceOne = numbersOne.reduce(sumArr);
const reduceTwo = numbersTwo.reduce(sumArr);
const reduceThree = numbersThree.reduce(sumArr);


/*---------------- WEEK 4 - Weekly Promt ---------------*/

const buttonAddArr = document.getElementById("submit-array");
const buttonAddNum = document.getElementById("submit-numbers");
const buttonReset = document.getElementById("reset");

const array = document.getElementById("your-array");

const mapDoubleRadio = document.getElementById("map1");
const mapMultiplyRadio = document.getElementById("map2");
const filterRadio = document.getElementById("filter");
const reduceRadio = document.getElementById("reduce");

const sumbit = document.getElementById("output-button");
const result = document.getElementById("output");

/*---------------- create array ---------------*/

let newArr = [];

function addArr() {
  let inputArr = document.getElementById("input-array").value;
  newArr = inputArr.split(",").map(str => Number(str));
  array.innerText = "[" + newArr + "]";
  return newArr;
}

function pushNumToArr() {
    let inputNum = Number(document.getElementById("input-numbers").value);
    newArr.push(inputNum);
    array.innerText = "[" + newArr.join(', ') + "]";
    return newArr;
}

function resetArr() {
     array.innerHTML = "[ ]";
     newArr.length = 0;
     document.getElementById("input-numbers").value = 0;
     document.getElementById("input-array").value = 0;
     document.getElementById("output").innerText = " "
     return newArr;
}

buttonAddArr.addEventListener("click", addArr);
buttonAddNum.addEventListener("click", pushNumToArr);
buttonReset.addEventListener("click", resetArr);

/*---------------- add methods ---------------*/

function addMethod() {
  let outcome;
  if (mapDoubleRadio.checked) {
    outcome = newArr.map(doubleNum);
    result.innerText = "[" + outcome.join(', ') + "]";
  }
  else if (mapMultiplyRadio.checked) {
    outcome = newArr.map(multiply);
    result.innerText = "[" + outcome.join(', ') + "]";
  }
  else if (filterRadio.checked) {
    outcome = newArr.filter(divideByTwo);
    result.innerText = "[" + outcome.join(', ') + "]";
  }
  else if (reduceRadio.checked) {
    outcome = newArr.reduce(sumArr);
    result.innerText = "[" + outcome + "]";
  }
}

sumbit.addEventListener("click", addMethod);

