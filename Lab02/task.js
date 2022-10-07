/*1. Напишите функцию, которая рассчитывает площадь, диаметр и длину окружности круга. Радиус круга вводит пользователь. */
let radius = Number(prompt("Введите радиус", ''));
function circleProperties(radius) {
    alert(`Площадь круга радиусом ${radius} равна ${Math.round(Math.PI * Math.pow(radius, 2))}`);
    alert(`Диаметр круга радиусом ${radius} равен ${radius * 2}`);
    alert(`Длина окружности круга радиусом ${radius} равна ${Math.round(2 * Math.PI * radius)}`);
}
circleProperties(radius);

/*2. Реализуйте функцию, которая сообщает пользователю, что его заказ на сумму s принят. Пользователь добавляет товары в корзину 
(вводит стоимость каждого товара в окно prompt). Если сумма стоимости товаров превысила денежные средства на банковской карте покупателя, 
сообщите об этом пользователю и предупредите, что последний товар он купить не может, поэтому он должен либо завершить покупку, либо выбрать 
товар с меньшей стоимостью, которая не превышает остаток n на карте. Чтобы завершить покупку пользователь должен ввести «0». */
function order(balance) {
    while (true) {
        let priceOfProduct = Number(prompt("Введите стоимость товара: ", ''));
        balance -= priceOfProduct;

        if (balance < 0) {
            balance += priceOfProduct;
            alert("Сумма товаров превышает денежные средства на вашей банковской карте." +
            "Выберите товар с меньшей стоимостью или завершите покупку. Баланс: " + balance);
            let exit = Number(prompt("Введите 0 для завершения покупки или стоимость другого товара: "), '');

            if (exit == 0) {
                break;
            }
        }
    }
}

order(200);

/*3. Реализуйте функцию с тремя параметрами. Первый параметр по умолчанию. 
Третий параметр вводит пользователь. Функция возвращает строку из трех параметров. */
let thirdParameter = prompt("Введите третий параметр", '');

function threeParameters(secondParameter, thirdParameter, firstParameter = "L") {
    alert(firstParameter + secondParameter + thirdParameter);
}
threeParameters("Hi", thirdParameter);

/*4. Реализуйте функцию, которая рассчитывает количество присутствующих студентов. 
Имена присутствующих студентов пользователь вводит в модальное окно. */
function counterOfStudents() {
    let counter = 0
    while (true) {
        let student = prompt("Введите имя студента (Чтобы прекратить ввод, введите 0): ", '');
        if (student == 0) {
            return counter;
        }
        counter++
    }
}
let countOfStudents = counterOfStudents();
alert(countOfStudents);

/*5. Известны стороны четырехугольника a и b. Если это квадрат, то функция params() возвращает его периметр, 
если прямоугольник –  то площадь. Создайте params() как Function Declaration и Function Expression. 
Вызовите ее при создании («на месте»).*/ 
function paramsVer1 (firstSide, secondSide) {
    if (firstSide == secondSide) {
        alert(firstSide * 4);
    }
    else {
        alert(firstSide * secondSide);
    }
};
paramsVer1(7, 7);

let paramsVer2 = function (firstSide, secondSide) {
    if (firstSide == secondSide) {
        return firstSide * 4;
    }
    else {
        return firstSide * secondSide;
    }
}(5, 6);
alert(paramsVer2); //30

/*6. Вы забыли пароль от электронной почты. Вы помните, что он состоит из 8 символов нижнего регистра. 
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
passwordGuessingTime();

/*Задачу 3 решите, используя функцию-стрелку. */
let threeParametersVer2  = (secondParameter, thirdParameter, firstParameter = "L") => 
    alert(firstParameter + secondParameter + thirdParameter);


threeParametersVer2("World", thirdParameter, "Hello!");

