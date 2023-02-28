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
    // Set the start position before the game starts
    this._field[0][0] = pathCharacter;
  }

  print() {
    console.log(this._field)
    const displayString = this._field.map(x => {
      return x.join('');
    }).join('\n');
    console.log(displayString);
  }

   askQuestion() {
    const answer = prompt('Which way? ').toUpperCase();
    switch (answer) {
      case 'U':
        this._locationY -= 1;
        break;
      case 'D':
        this._locationY += 1;
        break;
      case 'L':
        this._locationX -= 1;
        break;
      case 'R':
        this._locationX += 1;
        break;
      default:
        console.log('Enter U, D, L or R.');
        this.askQuestion();
        break;
    }
  }

  isInBounds() {
    return (
      this._locationY >= 0 &&
      this._locationX >= 0 &&
      this._locationY < this._field.length &&
      this._locationX < this._field[0].length
    );
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
console.log(myField.askQuestion());
console.log(myField.isInBounds());
