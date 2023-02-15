const medianNumber = 20;
let minus = '-';
let hash = '#';
let newYearTree;
for (let i = 1; i <= medianNumber; i++) {
  if (i === 1) {
    newYearTree = minus.repeat(medianNumber - i) + hash + minus.repeat(medianNumber - i);
  } else {
    hash = hash + '#' + '#';
    newYearTree = minus.repeat(medianNumber - i) + hash + minus.repeat(medianNumber - i);
  }
  if (i === medianNumber) {
    newYearTree = hash;
  }
  console.log(newYearTree);
}