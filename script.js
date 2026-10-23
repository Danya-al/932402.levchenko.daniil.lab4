const calories = [290, 120, 610, 450, 280, 720];

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

