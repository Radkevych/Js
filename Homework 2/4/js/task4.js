const numbers = [19, 5, 42, 2, 77];
const firstMin = Math.min.apply(null, numbers);
i = numbers.indexOf(firstMin);

if (i >= 0) {
    numbers.splice(i, 1);
}

const secondMin = Math.min.apply(null, numbers);
const sum = firstMin + secondMin;

console.log(sum);