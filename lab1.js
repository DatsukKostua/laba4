let n = 10;

for (let i = 1; i <= n; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("Sum is: " + sum);

let score = 82;
let result;

if (score >= 90 && score <= 100) {
  result = "Excellent";
} else if (score >= 75) {
  result = "Good";
} else if (score >= 60) {
  result = "Satisfactory";
} else {
  result = "Fail";
}

console.log("Score: " + score);
console.log("Result: " + result);

let number = 5;

for (let i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}
