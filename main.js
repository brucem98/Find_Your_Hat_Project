const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field = [[]]) {
    this._field = field;
    this._locationX = 0;
    this._locationY = 0;
    // this.field[0][0] = pathCharacter;
  }

  print() {
    console.log(this._field)
    const displayString = this._field.map(x => {
      return x.join('');
    }).join('\n');
    console.log(displayString);
  }    

}

const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);
// const input = prompt('Which way? ')
// console.log(`We are going ${input}`)

console.log(myField.print());
// console.log(myField.userInput(input))