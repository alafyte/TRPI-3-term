//Задание №1
//Выполните форматирование кода, согласно рекомендациям
function pow(x, n) {
    let result = 1;
    for (var i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 0) {
    alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
    alert(pow(x, n));
}

//Задание №2
/*Объявите переменные и задайте им следующие значения: имя пользователя, название города, 
год рождения, красный цвет, ответ пользователя (да/нет), бесконечность, 532, периметр четырехугольника 120 мм, 
сообщение пользователю «Введенные данные неверны». */
let userName = "Andrew";
let cityName = "Minsk";
let yearOfBirth = 2003;
let colorRed = "Red";
let userAnswer = prompt("Вы согласны с условиями пользования?", "");
let infinity = Infinity;
let number = 532;
let quadrilateralPerimeter = "120mm";
let message = "Введенные данные неверны";


//Задание №3
//Определите тип переменных 
let a = 5; //Number
let name = "Name"; //String
let i = 0; //Number
let double = 0.23; //Number
let result = 1 / 0; //Number
let answer = true; //Boolean
let no = null; //Object

alert("Тип переменной a: " + typeof a);
alert("Тип переменной name: " + typeof name);
alert("Тип переменной i: " + typeof i);
alert("Тип переменной double: " + typeof double);
alert("Тип переменной result: " + typeof result);
alert("Тип переменной answer: " + typeof answer);
alert("Тип переменной no: " + typeof no);

//Задание №4
//Вычислите площадь четырехугольника А, если его стороны равны 45 мм и 21 мм. 
let firstSide = 45;
let secondSide = 21;
let areaOfQuadrilateral = firstSide * secondSide;
alert("Площадь четырехугольника (прямоугольника) равна: " + areaOfQuadrilateral);

//Задание №5
//Сколько квадратов В со сторонами 5 мм поместятся в четырехугольник А (45мм х 21мм). 
let sideOfSquareB = 5;
let areaOfSquareB = Math.pow(sideOfSquareB, 2);

let numberOfSquares = Math.floor(areaOfQuadrilateral / areaOfSquareB);
alert("В четырехугольник А поместится " + numberOfSquares + " квадратов B");

//Задание №6
//Что больше а1 или b1? 
let j = 2;
let a1 = ++j;
let b1 = j++;

//Задание №7
//Что больше «Привет» или «привет»? «Привет» или «Пока»? 45 или «53»? false или 3? true или «3»? 3 или «5мм»? null или undefined? 
"Привет" < "привет"; //true
"Привет" < "Пока"; //false
45 < "53"; //true
false > 3; //false
true < "3"; //true
3 < "5мм"; //false
null < undefined; //false

//Задание №8
//Выведите сообщение о том, что введенные пользователем данные неверные.
alert("Данные введены неверно!");

//Задание №9
//Проверьте ответ пользователя на секретный вопрос. Ответ вводит пользователь в окно prompt.
let answerSecretQuestion = prompt("Имя домашнего питомца?", '');
(answerSecretQuestion.toUpperCase() == "БАРСИК" ) ? alert("Ответ верен!") : alert("Ответ не верен!");

//Задание №10
/*Пользователь выполняет вход в личный кабинет (вводит логин и пароль в prompt). 
Выведите соответствующее сообщение об успешном/неуспешном входе в зависимости о правильности введенных данных.*/
let login = "Jack2005";
let password = "jack27092005";

let loginEntered = prompt("Введите логин: ", "");
let passwordEntered = prompt("Введите пароль: ", "");

if (loginEntered == login && passwordEntered == password) {
    alert("Выполнен вход в личный кабинет!");
}
else {
    alert("Вход не выполнен! Неправильный логин или пароль!");
}

//Задание №11
/*У студента 3 экзамена: русский, математика, английский. Если он сдаст все экзамены, то его переведут на следующий курс. 
Если он не сдаст ни одного экзамена, то его отчислят. Если он не сдаст хотя бы один экзамен, то его ожидает пересдача. 
Для решения задачи использовать логические операторы.
 */
let russianIsPassed = true;
let mathIsPassed = true;
let EnglishIsPassed = true;

if (russianIsPassed && mathIsPassed && EnglishIsPassed) {
    alert("Вы переведены на следующий курс!");
}
else if (!russianIsPassed && !mathIsPassed && !EnglishIsPassed) {
    alert("Вы отчислены!");
}
else if (!russianIsPassed || !mathIsPassed || !EnglishIsPassed) {
    alert("У вас пересдача!")
}

//Задание №12
//Пользователь вводит число а и число b. Вычислите сумму чисел.
let numberA = Number(prompt("Введите число а: ", ""));
let numberB = Number(prompt("Введите число b: ", ""));
let sumAB = numberA + numberB;

alert("Сумма чисел а и b: " + sumAB);

//Задание №13
true + true; //2
0 + "5"; // "05"
5 + "мм"; //5мм
8 / Infinity; //0
9 * "\n9"; //81
null - 1; // -1
"5" - 2; //3
"5px" - 3; //NaN
true - 3; //-2
7 || 0; // 7

//Задание №14
/*К каждому четному числу в диапазоне [1, 10] прибавьте 2, 
а каждое нечетное число преобразуйте к виду «Xмм», где X – нечетное число. Выведите результат. */

for (let i = 1; i <= 10; i++) {
    if (isEven(i)) {
        alert(i + 2);
    }
    else {
        alert(i + "мм");
    }
}

function isEven(n) {
    if (n % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

//Задание 15
//Пользователь может вводить числа до тех пор, пока введенное число меньше 100.

let num;
while (true) {
    num = Number(prompt("Введите число: ", ""));
    if (num > 100) {
        break;
    }
}

//Задание №16
/*По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс. Номер дня вводит пользователь.*/

let numberOfDay = Number(prompt("Введите номер дня недели: "), "");

switch (numberOfDay) {
    case 1:
        alert("Понедельник");
        break;
    case 2:
        alert("Вторник");
        break;
    case 3:
        alert("Среда");
        break;
    case 4:
        alert("Четверг");
        break;
    case 5:
        alert("Пятница");
        break;
    case 6:
        alert("Суббота");
        break;
    case 7:
        alert("Воскресенье");
        break;
    default:
        alert("Введены неверные данные!");
        break;
}

