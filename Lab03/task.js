/*1. Вы – модератор на форуме о собаках. Существуют определённые правила модерации комментариев пользователей: длина комментария не более n символов; запрещается использовать слова с корнем «кот» – он заменяется на символ *; слова с корнем «собак» должны быть с большой буквы; перед словом «пес» обязательно должно быть слово «многоуважаемый». Выполните модерацию комментария пользователя и опубликуйте на форуме, правильный комментарий. */

let comment = prompt("Введите новый комментарий", '');
const n = 140;
let result;
let pos = 0;

if (comment.length > n) {
    alert("Длина комментария не должна превышать 140 символов!")
} else {
    result = comment.replace(/кот/gi, '*');
    result = result.replace(/собак/gi, 'Собак');
    result = result.replace(/пес/gi, 'Многоуважаемый пес');
}
alert(result);

/*2. По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс.
Используйте объект. Выведите все нечетные дни (номер и название) и их количество. */
let week = {
    1: "Понедельник",
    2: "Вторник",
    3: "Среда",
    4: "Четверг",
    5: "Пятница", 
    6: "Суббота",
    7: "Воскресенье"
}

let number = Number(prompt("Введите номер дня недели", ''));
if (number < 1 || number > 8) {
    alert("Неккоретные данные");
}
else {
    alert(week[number]);
}

let countOfOddDays = 0;

for (let i in week) {
    if (i % 2 != 0) {
        alert(`Номер: ${i}, название: ${week[i]}`);
        countOfOddDays++;
    }
}
alert(`Количество нечетных дней: ${countOfOddDays}`);

/*3. На сайте все элементы оформлены одинаково. У всех кнопок одинаковые ширина, высота, цвет фона и текста. Все ссылки имеют одинаковые размер шрифта, гарнитуру и цвет текста. Для привлечения внимания элементы выделяют желтым цветом (цвет фона). Создайте объекты для кнопок, для ссылок и акцентных элементов (3 объекта!!). Используя эти объекты, создайте акцентные кнопки и ссылки. */
    let link = document.createElement("a");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let accent = document.createElement("em");
    let container = document.querySelector("body");

    let ForButton = {
        color: "aqua",
        background: "black",
        'font-size': "40px",
        'margin-right': "20px",
    }

    let ForLink = {
        background: "red",
        color: "white",
        'font-size': "30px",
        'margin-right': "20px",
    }

    let ForElements = {
        color: "red",
        'margin-right': "20px",
    }

    Object.assign(link.style, ForLink);
    Object.assign(button1.style, ForButton);
    Object.assign(button2.style, ForButton);
    Object.assign(accent.style, ForElements);

    link.innerHTML = "Cсылка";
    accent.innerHTML = "Акцент";
    button2.innerHTML = "Кнопка 2";

    container.append(button1);
    container.append(button2);
    button1.append(accent);
    container.append(link);
    

/*4. Имеется список товаров. Пользователь может добавить/удалить товар из списка, проверить наличие товара. Определите количество имеющего товара. Используйте коллекцию Set.  */
let set = new Set(["Хлеб", "Молоко", "Йогурт", "Колбаса"]);

set.forEach( (value, valueAgain, set) => alert(value));

let exit = 1;
while (exit) {
   let choice = prompt("Выберите что вы хотите сделать:\n1 - Добавить товар\n2 - Удалить товар\n3 - Проверить наличие товара\n4 - Выйти")
    let elem;
    switch (choice) {
        case "1": {
            elem = prompt("Введите название товара");
            set.add(elem);
            set.forEach((value, valueAgain, set) => alert(value));
            break;
        };
        case "2": {
            elem = prompt("Введите название товара");
            set.delete(elem);
            set.forEach((value, valueAgain, set) => alert(value));
            break;
        };
        case "3": {
            elem = prompt("Введите название товара");
            if (set.has(elem)) {
                alert(`Товар ${elem} уже добавлен в корзину`);
            }
            else {
                alert(`Товар ${elem} ещё не добавлен в корзину`);

            }
            break;
        };
        case "4": {
            exit = 0;
            break;
        };
        default:
            exit = 0;
            break;
    }
}
alert(`Количество позиций в корзине: ${set.size}`);


/*5. Используя коллекцию Map и ее методы, реализуйте корзину товаров. В корзине хранится информация о товаре: id, количество товара, цена. Пользователь может добавить/удалить товар из корзины, изменить количество каждого товара. Рассчитайте количество позиций в корзине и сумму заказа.
 */
let basket = new Map();
exit = true;
while (exit) {
    let choice = +prompt("1 - Добавить товар\n2 - Удалить товар\n3 - Изменить кол-во товара\n4 - Информация о товарах в корзине\n5 - Выход");
    let summ = 0;
    let tmp = {
        id: id = 0,
        Count: ct = 0,
        Price: pr = 0
    }
    switch (choice) {
        case 1: {
            tmp.id = +prompt("id");
            tmp.Count = +prompt("Кол-во");
            tmp.Price = +prompt("Цена");
            basket.set(tmp.id, tmp);
            break;
        }
        case 2: {
            basket.delete(+prompt("Введите номер товара для удаления"));
            break;
        }
        case 3: {
            let buff = {
                id: tmp.id,
                Count: +prompt("Введите новое кол-во"),
                Price: tmp.Price
            }
            basket.set(+prompt("Введите номер товара"), buff);
            break;
        }
        case 4: {
            for (let item of basket.values()) {
                summ += item.Price;
            }
            alert(summ + " - сумма " + basket.size + " - кол-во позиций");
            break;
        }
        case 5: {
            exit = false;
            break;
        }
        default: {
            exit = false;
            break;
        }
    }
}