/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */

function calcular(operador1, operador2) {
  console.log(
    'Soma =',
    operador1 + operador2,
    'Subtração =',
    operador1 - operador2,
    'Multiplicação =',
    operador1 * operador2,
    'Divisão =',
    operador1 / operador2
  );
}

calcular(1, 2);
calcular(2, 2);
calcular(4, 2);
