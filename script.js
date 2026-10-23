const calories = [290, 120, 610, 450, 280, 720, 700];

function findMax(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

function filterHigh(numbers, limit) {
  const result = [];

  for (const value of numbers) {
    if (value > limit) {
      result.push(value);
    }
  }

  return result;
}

function getSum(numbers) {
  let sum = 0;

  for (const value of numbers) {
    sum += value;
  }

  return sum;
}

const userName = prompt("Как вас зовут?", "Гость");

if (userName) {
  alert("Здравствуйте, " + userName + "! Это блог о домашней кухне.");
} else {
  alert("Здравствуйте! Это блог о домашней кухне.");
}

console.log("Калорийность блюд:", calories);

const total = getSum(calories);
const highCalorie = filterHigh(calories, 600);
const highTotal = getSum(highCalorie);
const maxCalorie = findMax(calories);

let lowCount = 0;

for (const value of calories) {
  if (value <= 300) {
    lowCount++;
  }
}

const lowShare = Math.round((lowCount / calories.length) * 100);

alert(
  "Суммарная калорийность — " + total + " ккал, из них " +
  highTotal + " ккал — в высококалорийных блюдах."
);

console.log("Максимальная калорийность:", maxCalorie, "ккал");
console.log("Высококалорийные блюда (> 600 ккал):", highCalorie);
console.log("Низкокалорийных блюд (≤ 300 ккал):", lowCount, "из", calories.length);
console.log("Их доля:", lowShare + "%");

if (total > 3000) {
  console.log("Такой рацион лучше распределить на 2 дня");
}