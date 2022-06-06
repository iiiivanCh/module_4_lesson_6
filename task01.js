"use strict"

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов', 'Федоров'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов', 'Петров'];

const goodStudents = (allStudents, failedStudents) => {
  let good = [];
  for (let i = 0; i < allStudents.length; i++) {
    let index = 1;
    for (let j = 0; j < failedStudents.length; j++) {
      if (failedStudents[j] === allStudents[i]) {
        index = 0;
      }
    }
    if (index === 1) {
      good.push(allStudents[i]);
    }
  }
  console.log(good);
}

goodStudents(allStudents, failedStudents);

