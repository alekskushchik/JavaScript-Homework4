"use strict";
// Задание 1

function fib(n) {
    var a = 1, b = 1;// задаем начальные значения чисел ряда Фибоначчи
    for (var i = 3; i <= n; i++) {
      var c = a + b; //
      a = b;
      b = c;
    }
    return b;
  }
var n = +(prompt('Введите порядковый номер числа, чтобы узнать его значение в ряду Фибоначчи'));
console.log(n + " член в числовом ряду Фибоначчи будет равен " + fib(n));

console.log('</----------------------------------/>')

// Задание 2

var n = 1000;
var num = 0;
do {
    num++;
    n /= 2;
    console.log(n); //остаточное число n после деления пополам при прохождении цикла
} while (n > 50);

console.log(num + ' раз необходимо поделить заданное число (1000) пополам, чтобы остаток был меньше 50.'); // выводим кол-во итераций