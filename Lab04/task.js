/*1. Реализуйте функцию без параметров. Вызовите ее с произвольным количеством аргументов. Если вы передали не более 3-х аргументов, то функция должна возвращать строку, состоящую из значений всех аргументов. Если вы передали более 3-х, но не более 5-ти аргументов – то типы аргументов. Если более 5-ти и не более 7-ми – то   количество аргументов. Если более 7-ми – то сообщение о том, что количество аргументов очень большое. */

function func(...args) {
    if (args.length <= 3) {
        return args.join('');
    } else if (args.length > 3 && args.length <= 5) {
        return args.map(arg => typeof arg);
    } else if (args.length > 5 && args.length <= 7) {
        return args.length;
    } else {
        return 'Количество аргументов очень большое';
    }
}

//alert(func(1, 2, 3)); 
//alert(func('a', 'b', 'c')); 
//alert(func(1, 'a', true));
//alert(func(1, 2, 3, 4)); 
//alert(func(1, 'a', true, false)); 
//alert(func(1, 2, 3, 4, 5, 6)); 
//alert(func(1, 2, 3, 4, 5, 6, 7, 8)); 

/*2. Что будет выведено в следующих примерах? Почему? */
// 1)
//window.a; 
//alert(a);    ReferenceError: a is not defined

// 2)
//alert(a);
//window.a = 2; ReferenceError: a is not defined

// 3)
//alert(a); 
//window.a = 2;
//let a;   Cannot access 'a' before initialization

// 4)
//alert(a);
//window.a = 2;
//var a;  Вывод: undefined

// 5)
//alert(a);
//let a = 2; Cannot access 'a' before initialization

//6)
//let a = 2;
//window.a = 3;
//alert(a);  Вывод: 2

// 7)
//var a = 2; 
//window.a = 3;
//alert(a);  Вывод: 3

/*3. Что будет выведено в окне? Почему не undefined? */
let s = 5;
function sum() {
    alert(s); // выведет 5, т.к. переменная s находится в глобальной области видимости
}

sum();

/* 4. Что выведет alert в примерах? Поясните почему так? На что ссылается [[Environment]] функций? Что будет содержать LexicalEnvironment при запуске функций? Что хранится в counter? Когда будет вызвана функция (*)?
Вариант 1
 */
function makeCounter1() {
    let currentCount = 1;

    return function() {  
        return currentCount++; 
    };
}

let counter1 = makeCounter1();

//alert( counter1() ); // 1
//alert( counter1() ); // 2
//alert( counter1() ); // 3

let counter2 = makeCounter1();
//alert( counter2() ); // 1

/*Вариант 2 */
let currentCount = 1;

function makeCounter2() {
    return function() {
        return currentCount++;
    };
}

let counter3 = makeCounter2();
let counter4 = makeCounter2();

//alert( counter3() ); // 1
//alert( counter3() ); // 2

//alert( counter4() ); // 3
//alert( counter4() ); // 4

/*5. Выведите имена всех функций из предыдущих задач. */
alert(`
${func.name}\n
${sum.name}\n
${makeCounter1.name}\n
${makeCounter2.name}\n
`);

/*6. Реализуйте каррированную функцию, которая рассчитывает объем прямоугольного параллелепипеда.*/
function volume(a) {
    return (b) => {
        return (c) => {
            return a * b * c;
        }
    }
}

alert(`Объем параллелепипеда №1: ${volume(2)(3)(4)}`);
/* Выполните преобразование функции для неоднократного расчёта объема прямоугольных параллелепипедов, у
которых одно ребро одинаковой длины. */
function volumeV2(a) {
    return (b, c) => {
        return a * b * c;
    }
}
let volume2 = volumeV2(5);
alert(`Объем параллелепипеда №2: ${volume2(3, 4)}`);
alert(`Объем параллелепипеда №3: ${volume2(6, 8)}`);

/*7. Пользователь управляет движением объекта, вводя в модальное окно  команды left, right, up, down. Объект совершает 10 шагов в заданном направлении (т.е. высчитываются и выводятся в консоль соответствующие координаты) и запрашивает новую команду. Разработайте генератор, который возвращает координаты объекта, согласно заданному направлению движения.  */
function* move() {
    var a;
    let x = 0;
    let y = 0;
    let direction;

    for (let i = 0; i < 10; i++) {
        direction = (a = prompt("Введите направление")) !== null && a !== undefined ? a : "default"; // Проверка на null и undefined
        switch (direction.trim().toLowerCase()) {
            case "left":
                x--;
                break;
            case "right":
                x++;
                break;
            case "up":
                y++;
                break;
            case "down":
                y--;
                break;
        }
        yield [x, y];
    }
}

let generator = move(); 

for (let i = 0; i < 10; i++) {
    alert(generator.next().value);
}