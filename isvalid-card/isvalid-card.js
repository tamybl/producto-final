/*
* Funcion que pregunta al usuario un numero de tarjeta a validar
* y mediante el algoritmo de Luhn devuelve un alert con la respuesta
* de la verificación.
*/

function isValidCard() {
  do {
    var card = prompt('Ingrese número de la tarjeta de crédito');
    if (card === '' || card === /[1-9]/g) {
      alert('Debe ingresar un número');
    }
  } while (card === '' || card === /[1-9]/g);
  var cardArray = [];
  for (var i = card.length - 1; i >= 0; i--) {
    if (card[i] !== ' ') {
      cardArray.push(parseInt(card[i]));
    }
  }

  var sum = 0;
  var result = 0;

  for (var j = 0; j < cardArray.length; j++) {
    if (j % 2 !== 0) {
      result = cardArray[j] * 2;
      // result temporalmente ej: result = cardArray[6]* 2 --> result = 12;
      if (result > 9) {
        result = (result % 10) + 1;
      }
      sum = sum + result;
    } else {
      sum = sum + cardArray[j];
    }
  }

  (sum % 10 === 0) ? alert('La tarjeta ingresada es válida') : alert('La tarjeta ingresada no es válida');
}

isValidCard();


// Numero tarjeta válida 3625102593804