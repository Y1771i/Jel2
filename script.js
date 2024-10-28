//! 1.
const numbers = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//! 2.
const num = [10, 15, 20, 25, 30];

let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}

console.log("Сумма всех элементов массива:", sum);

//! 3.
const languages = ["java", "python", "javascript"];

for (let i = 0; i < languages.length; i++) {
  const currentLanguage = languages[i];

  console.log(
    `Длина строки '${currentLanguage}' равна ${currentLanguage.length}`
  );
}

//! 4.
const elem = [3, 1, 4, 1, 5];

let min = elem[0];

for (let i = 1; i < elem.length; i++) {
  if (elem[i] < min) {
    min = elem[i];
  }
}

console.log("Минимальное число:", min);

//! 5.
const loko = [12, 15, 8, 5, 19];

loko.reverse();

console.log(loko);

//! 6.
const reloko = [3, 6, 9, 12, 15];

let sum2 = 0;

for (let i = 0; i < reloko.length; i++) {
  if (reloko[i] % 3 === 0) {
    sum2 += reloko[i];
  }
}

console.log("Сумма чисел, делящихся на 3:", sum2);

//! 7.
const numbers3 = [5, 3, 8, 6];

for (let i = 0; i < numbers3.length; i++) {
  numbers3[i] = numbers3[i] * numbers3[i] * numbers3[i];
}

console.log(numbers3);

//! 8.
const numbers4 = [7, -2, 4, -9, 0];
const positiveNumbers = [];

for (let i = 0; i < numbers4.length; i++) {
  if (numbers4[i] >= 0) {
    positiveNumbers.push(numbers4[i]);
  }
}

console.log(positiveNumbers);

//! 9.
const numbers5 = [2, 3, 5, 7, 11];
let count = 0;

for (let i = 0; i < numbers5.length; i++) {
  if (numbers5[i] > 5) {
    count++;
  }
}

console.log("Количество чисел больше 5:", count);

//! 10.
const animals = ["cat", "dog", "rabbit"];

for (let i = 0; i < animals.length; i++) {
  animals[i] = animals[i].toLowerCase();
}

console.log(animals);

//! 11.
const numbers6 = [2, 4, 6, 8, 10];

for (let i = 0; i < numbers6.length; i++) {
  console.log("Элемент массива на индексе", i, ":", numbers6[i]);
}

//! 12.
const numbers7 = [2, 4, 6, 8, 10];
let hasNumber = false;

for (let i = 0; i < numbers7.length; i++) {
  if (numbers7[i] === 5) {
    hasNumber = true;
    break;
  }
}

if (hasNumber) {
  console.log("Число 5 есть в массиве.");
} else {
  console.log("Числа 5 нет в массиве.");
}

//! 13.
function getLastElement(array) {
  return array.length === 0 ? null : array[array.length - 1];
}

const numbers8 = [13, 17, 19, 23, 29];
const lastNumber = getLastElement(numbers8);
console.log("Последний элемент:", lastNumber);

//! 14.
function sumOfMultiples(array, divisor) {
  let sum5 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % divisor === 0) {
      sum = sum5 + array[i];
    }
  }
  return sum5;
}

const numbers9 = [7, 14, 21, 28];
const sum5 = sumOfMultiples(numbers9, 7);
console.log("Сумма элементов, кратных 7:", sum5);

//! 15.
function createArrayOfOnes(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[array.length] = 1;
  }
  return array;
}

const onesArray = createArrayOfOnes(4);
console.log(onesArray);

//! 16.
const numbers1 = [5, 8, 1, 9, 3];
let max6 = numbers1[0];
let min7 = numbers1[0];

for (let i = 1; i < numbers1.length; i++) {
  if (numbers1[i] > max6) {
    max6 = numbers1[i];
  }
  if (numbers1[i] < min7) {
    min7 = numbers1[i];
  }
}

const difference = max6 - min7;
console.log("Разница между максимальным и минимальным элементами:", difference);

//! 17.
const numbers2 = [2, 4, 6, 8, 10];
let sum0 = 0;

for (let i = 0; i < numbers2.length; i++) {
  sum0 = sum0 + numbers2[i];
}

const average = sum0 / numbers2.length;
console.log("Среднее арифметическое элементов массива:", average);

//! 18.
const numbers32 = [3, -4, 7, -8, 9];

for (let i = 0; i < numbers32.length; i++) {
  if (numbers32[i] < 0) {
    numbers32[i] = -numbers32[i];
  }
}

console.log(
  "Массив после замены отрицательных элементов на модули:",
  numbers32
);
