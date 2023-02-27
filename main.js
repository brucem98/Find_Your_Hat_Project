
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
      this._field = field;
    }
  
    print() {
      let printField = [];
      for (let i = 0; i < this._field.length; i++) {
        let arraytoString = this._field[i].toString();
        printField.push(arraytoString);
      }
      let newString = printField.join('\n');
      return newString.split(',').join('');
    }    
  
  }
  
  const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
  console.log(myField.print());
  