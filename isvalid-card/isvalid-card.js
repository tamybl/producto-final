function isValidCard() {
  do {
    var card = prompt('Ingrese número de la tarjeta de crédito');
    if (card === '' || card === /[1-9]/g) {
      alert('Debe ingresar un número'); // valido que ingrese algo y que tenga solo numeros
    }
  } while (card === '' || card === /[1-9]/g);
  var cardArray = [];
  // For desde el último elemento, hasta que llegue a 0 y va decrementando
  for (var i = card.length - 1; i >= 0; i--) {
    if (card[i] !== ' ') {
      cardArray.push(parseInt(card[i])); // Pushea los números ingresados de la tarjeta al inverso e ignora los espacios
    }
  }

  var sum = 0;
  var result = 0;

  for (var j = 0; j < cardArray.length; j++) { // recorre el array inverso
    if (j % 2 !== 0) { // si la posición en la que está es número par
      result = cardArray[j] * 2; // entonces su valor lo multiplico por 2 y lo guardo en result temporalmente ej: result = cardArray[6]* 2 --> result = 12;

      if (result > 9) { // Si ese valor temporal es mayor a 9 (result = 12)
        result = (result % 10) + 1; // (result % 10) + parseInt(result/10);
        // Entonces aplico el algoritmo de lhun (12%10) + parseInt(12/10) --> result = 3
      }
      sum = sum + result; // Una vez separados los va sumando
    } else {
      sum = sum + cardArray[j]; // Suma el resultado guardado en el if anterior + el de cada posición impar
    }
  }

  (sum % 10 === 0) ? alert('La tarjeta ingresada es válida') : alert('La tarjeta ingresada no es válida');
}

isValidCard();


// Numero tarjeta válida 3625102593804