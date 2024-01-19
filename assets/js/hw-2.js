// 1 Задание

alert("Задание 1");
let a = 10;
alert(a);
a = 20;
alert(a);


// 2 Задание

const year = 2007;
alert("Задание 2");
alert("Год выпуска первого Айфона: " + year);

// 3 Задание

const creatorJSName = "Бренданом Айком";
alert("Задание 3");
alert("Имя создателя JavaScript: " + creatorJSName);

// 4 Задание

let num41 = 10;
let num42 = 2;
alert("Задание 4");
alert("Сумма: " + (num41+num42));
alert("Разность: " + (num41-num42));
alert("Произведение: " + (num41*num42));
alert("Частное: " + (num41/num42));

// 5 Задание

let result5 = Math.pow(5,2);
alert("Задание 5");
alert("Результат возведения в степень: " + result5);

// 6 Задание

let num61=9;
let num62=2;
alert("Задание 6");
alert((num61%num62)+(num61/num62));

// 7 Задание

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++  ;
num --  ;
alert("Задание 7");
alert(num);

// 8 Задание

alert("Задание 8");
let age = prompt("Сколько вам лет?");
alert("Ваш возраст: " + age);

// 9 Задание.

alert("Задание 9");
let user = {
    name: 'Matvey',
    age: 19,
    isAdmin: true,
    cityOfResidence: "Tomsk",
}

user.age = "Без возроста";

delete user.cityOfResidence;


let info = prompt('Какую информацию хотите узнать о пользователе? Обробатываются только запросы с заглавной буквы, например Имя, Возраст, Администратор');

if(info){
    alert(user[info]);
}

// 10 Задание

alert("Задание 10");
let userName = prompt('Введите ваше имя.');
alert("Привет " + userName + "!");

