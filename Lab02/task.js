/*1. Напишите функции, которые рассчитывают площадь, диаметр и длину окружности круга. Радиус круга вводит пользователь. 
Реализуйте функции как Function Declaration и Function Expression, функции-стрелки.*/
let radius = Number(prompt("Введите радиус", ''));

//Площадь
function circleAreaDec(radius) {
    alert(`Площадь круга радиусом ${radius} равна ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);
};

let circleAreaEx = function(radius) {
    alert(`Площадь круга радиусом ${radius} равна ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);
};

let circleAreaArrow = (radius) => {
    alert(`Площадь круга радиусом ${radius} равна ${(Math.PI * Math.pow(radius, 2)).toFixed(2)}`);
};

circleAreaDec(radius);

//Диаметр
function circleDiameterDec(radius) {
    alert(`Диаметр круга радиусом ${radius} равен ${radius * 2}`);
};

let circleDiameterEx = function(radius) {
    alert(`Диаметр круга радиусом ${radius} равен ${radius * 2}`);
};

let circleDiameterArrow = (radius) => {
    alert(`Диаметр круга радиусом ${radius} равен ${radius * 2}`);
};

circleDiameterEx(radius);

//Длина окружности
function circumferenceDec(radius) {
    alert(`Длина окружности круга радиусом ${radius} равна ${(2 * Math.PI * radius).toFixed(2)}`);
};

let circumferenceEx = function(radius) {
    alert(`Длина окружности круга радиусом ${radius} равна ${(2 * Math.PI * radius).toFixed(2)}`);
};

let circumferenceArrow = (radius) => {
    alert(`Длина окружности круга радиусом ${radius} равна ${(2 * Math.PI * radius).toFixed(2)}`);
};

circumferenceArrow(radius);

/*2. Реализуйте функцию с тремя параметрами. Первый параметр по умолчанию. 
Третий параметр вводит пользователь. Функция возвращает строку из трех параметров. */
let thirdParameter = prompt("Введите третий параметр", '');

function threeParameters(secondParameter, thirdParameter, firstParameter = "JavaScript") {
    alert(firstParameter + secondParameter + thirdParameter);
}
threeParameters(" is a ", thirdParameter);

/*3. Реализуйте функцию, которая рассчитывает количество присутствующих студентов. 
Имена присутствующих студентов пользователь вводит в модальное окно. */
function counterOfStudents() {
    let counter = 0
    while (true) {
        let student = prompt("Введите имя студента (Чтобы прекратить ввод, введите 'стоп'): ", '');
        if (student.toLowerCase() == "стоп" || student == "") {
            return counter;
        }
        counter++
    }
}
let countOfStudents = counterOfStudents();
alert(countOfStudents);

/*4. Вы забыли пароль от электронной почты. Вы помните, что он состоит из 8 символов нижнего регистра. 
Первые 5 – это буквы английского алфавита, последние 3 – цифры.  Один пароль вы успеваете ввести за 3 секунды. 
Сколько максимум времени вам понадобится, чтобы подобрать пароль? Выведите результат в виде строки «y лет m месяцев d дней h часов 
min минут s секунд». Для простоты решения можно принять, что в месяце 30 дней. */

const countOfTries = 26 * 26 * 26 * 26 * 26 * 10 * 10 * 10;
let years = 0;
let months = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = countOfTries * 3;

function passwordGuessingTime() {

    while (seconds >= 60) {
        if (seconds >= 60) {
            minutes++;
            seconds -= 60;
        }
        if (minutes >= 60) {
            hours++;
            minutes -= 60;
        }
        if (hours >= 24) {
            days++;
            hours -= 24;
        }
        if (days >= 30) {
            months++;
            days -= 30;
        }
        if (months >= 12) {
            years++;
            months -= 12;
        }
    }
    alert(`${years} лет ${months} месяцев ${days} дней ${hours} часов ${minutes} минут ${seconds} секунд`)
}
//passwordGuessingTime();

/*5. Пользователь вводит данные. Если он ввел число, то преобразуйте его в 16-ричную систему счисления (вывод в верхнем регистре). 
Если число дробное – округлите его до наибольшего, наименьшего и ближайшего целого. Если пользователь ввел текст, то преобразуйте его к 
верхнему и нижнему регистру. */

while (true) {
    let data = prompt("Вводите данные. Чтобы прекратить ввод, введите 'стоп'");
    if (data.toLowerCase() == "стоп") {
        break;
    } else if (Number(data)) { 
        if (Number.isInteger(Number(data))) {
            alert(Number(data).toString(16).toUpperCase());
        } else {
            alert(Math.ceil(Number(data)));
            alert(Math.floor(Number(data)));
            alert(Math.round(Number(data)));
        }

    } else {
        alert(data.toLowerCase());
        alert(data.toUpperCase());
    }
}

/*6. Выпускник сдает ЦТ по русскому языку. Ему дано словарное слово, необходимо ввести в текстовое поле правильный вариант ответа. 
Проверьте его ответ и сообщите в каком символе он допустил ошибку, если она есть. */
const dictionaryWord = "Абажур";

let studentsAnswer = prompt("Введите словарное слово: абаж_р", '');
let wrongSymbol;

if (studentsAnswer.toLowerCase() != "абажур") {
    for (i = 0; i < dictionaryWord.length - 1; i++) {
        if (dictionaryWord[i].toLowerCase() != studentsAnswer[i].toLowerCase()) {
            wrongSymbol = i;
            break;
        }
    }
    alert(`Ошибка! Неверный символ: ${studentsAnswer[wrongSymbol]}, позиция: ${wrongSymbol + 1}`);
} else {
    alert("Всё верно!");
}

/*7. Разработайте геометрический калькулятор для расчета параметров треугольника: площадь, периметр, высота, cos, sin, tg, ctg. 
Пользователь указывает длину катетов. */
let firstLeg = Number(prompt("Введите длину первого катета", ''));
let secondLeg = Number(prompt("Введите длину второго катета", ''));
let hypotenuse = Math.sqrt(Math.pow(firstLeg, 2) + Math.pow(secondLeg, 2)).toFixed(2);

let triangleArea = 0.5 * firstLeg * secondLeg;
let trianglePerimeter = firstLeg + secondLeg + hypotenuse;
let triangleHeight = firstLeg * secondLeg / hypotenuse;
let cos1 = firstLeg / hypotenuse;
let cos2 = secondLeg / hypotenuse;
let sin1 = secondLeg / hypotenuse;
let sin2 = firstLeg / hypotenuse;
let tg1 = secondLeg / firstLeg;
let tg2 = firstLeg / secondLeg;
let ctg1 = firstLeg / secondLeg;
let ctg2 = secondLeg / firstLeg;

alert(`Площадь треугольника: ${triangleArea}\n
Площадь треугольника: ${trianglePerimeter}\n
Высота треугольника: ${triangleHeight}\n
Косинус первого угла треугольника: ${cos1}\n
Косинус второго угла треугольника: ${cos2}\n
Синус первого угла треугольника: ${sin1}\n
Синус второго угла треугольника: ${sin2}\n
Тангенс первого угла треугольника: ${tg1}\n
Тангенс второго угла треугольника: ${tg2}\n
Котангенс первого угла треугольника: ${ctg1}\n
Котангенс второго угла треугольника: ${ctg2}\n`);
