const studentsArr = [...]; // массив студентов

class CreateStudent {
  static idCounter = 0; // статическое свойство для хранения счетчика идентификаторов

  constructor(student) {
    this.id = CreateStudent.idCounter++; // генерируем уникальный идентификатор
    this.name = student.name;
    this.surname = student.surname;
    this.ratingPoint = student.ratingPoint;
    this.schoolPoint = student.schoolPoint;
    this.isSelfPayment = this.determineSelfPaymentStatus();
  }

  determineSelfPaymentStatus() {
    if (this.ratingPoint >= 800) {
      const selfPaymentStudents = []; // массив для хранения студентов на контракте

      // находим всех студентов на контракте и собираем их в массив
      const allStudents = setAllCreatedStudentsByConstructor(studentsArr);
      allStudents.forEach(student => {
        if (student.isSelfPayment) {
          selfPaymentStudents.push(student);
        }
      });

      // если студентов на контракте меньше 5, то текущий студент на бюджете
      if (selfPaymentStudents.length < 5) {
        return false;
      } else {
        // сортируем массив контрактников по убыванию ratingPoint
        selfPaymentStudents.sort((a, b) => b.ratingPoint - a.ratingPoint);

        // если рейтинг текущего студента больше, чем у самого слабого контрактника, то он получает бюджет
        if (this.ratingPoint > selfPaymentStudents[4].ratingPoint) {
          selfPaymentStudents[4].isSelfPayment = true;
          return false;
        } else {
          return true;
        }
      }
    } else {
      return true;
    }
  }
}

const setAllCreatedStudentsByConstructor = arrOfStudents => {
  const newStudentsArr = [];
  arrOfStudents.forEach(student => {
    const newStudent = new CreateStudent(student);
    newStudentsArr.push(newStudent);
  });
  return newStudentsArr;
};

const newStudentsArr = setAllCreatedStudentsByConstructor(studentsArr);
console.log(newStudentsArr);