"use strict"

const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (names, prefix) => {

  let namesPrefix = [];

  for(let i = 0; i < names.length; i++ ) {
    if (names[i] === 'Robot') {
      namesPrefix.push(prefix +'. ' + names[i]);
      continue;
    }
    namesPrefix.push(prefix + ' ' + names[i]);
  }
  console.log(namesPrefix);
}

addPrefix(names, 'Mr');