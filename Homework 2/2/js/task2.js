function getArray(amount) {
  const mainArr = [];

  for (let i = 0; i < amount / 3; i++) {
    const innerArr = [];

    for (let j = 0; j < 3; j++) {
      innerArr[j] = j + 1 + 3 * i;
    }

    mainArr[i] = innerArr;
  }
  
  return mainArr;
}

console.log(getArray(9));

