function calculate(roomsOnFloor, floors, roomNumber) {
  let roomsPerPorch = roomsOnFloor * floors;
  let nonRoundedPorchNumber = roomNumber / roomsPerPorch;
  let RoundedPorchNumber = 1;

  for (let i = 1; i < nonRoundedPorchNumber; i++) {
    RoundedPorchNumber++;
  }

  let nonRoundedFlourNumber = (roomNumber - roomsPerPorch * (RoundedPorchNumber - 1)) / 3;
  let RoundedFlourNumber = 1;

  for (let i = 1; i < nonRoundedFlourNumber; i++) {
    RoundedFlourNumber++;
  }
  let message = 'Room numder is ' + roomNumber + ', so ' + 'Flour is ' + RoundedFlourNumber + ' and ' + 'Porch is ' + RoundedPorchNumber;
  return message;
  
}

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 456;
let answer = calculate(roomsOnFloor, floors, roomNumber);
console.log(answer);







