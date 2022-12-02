/*1. Хранилище всего имеющегося товара в интернет-магазине представляет собой объект products.  Весь товар разделен на категории, одна из них «Обувь», которая в свою очередь делится на виды «Ботинки», «Кроссовки», «Сандалии». О каждой паре обуви хранится следующая информация: уникальный номер товара, размер обуви, цвет, цена.  */

let Products = {
    shoes: {
        boots: {
            id: 1,
            size: 38,
            color: 'black',
            price: 200

        },
        sneakers: {
            id: 2,
            size: 41,
            color: 'white',
            price: 103

        },
        sandals: {
            id: 3,
            size: 36,
            color: 'red',
            price: 60
        }
    }
}


// 2. Реализуйте итератор для объекта products для доступа к каждому товару.
Products[Symbol.iterator] = function() {
    return {
        current: this.shoes.boots.id,
        last: this.shoes.sandals.id,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

for (let value of Products) {
   alert(value);
}

/*3. Реализуйте фильтр обуви по цене в заданном диапазоне, по заданному размеру, по заданному цвету. Выведите номера товаров, соответствующих заданному условию (фильтру). */

let choice = 1;
let found = false;
while (choice) {
    choice = prompt('Выберите действие: \n1 - фильтр по цене \n2 - фильтр по размеру \n3 - фильтр по цвету \n0 - выход');

    switch (choice) {
        case '1':
            let minPrice = prompt('Введите минимальную цену');
            let maxPrice = prompt('Введите максимальную цену');
            for (let key in Products.shoes) {
                if (Products.shoes[key].price >= minPrice && Products.shoes[key].price <= maxPrice) {
                    alert(Products.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case '2':
            let size = prompt('Введите размер');
            for (let key in Products.shoes) {
                if (Products.shoes[key].size == size) {
                    alert(Products.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case '3':
            let color = prompt('Введите цвет');
            for (let key in Products.shoes) {
                if (Products.shoes[key].color == color) {
                    alert(Products.shoes[key].id);
                    found = true;
                }
            }
            if (!found) {
                alert("Ничего не найдено");
            }
            found = false;
            break;
        case '0':
            choice = 0;
            break;
        default:
            alert('Неверный ввод');
    }
}


/*4.Каждый товар (пара обуви) из предыдущей задачи представляет собой однотипные объекты. Учитывая это, создайте объект товара с помощью new, при этом свойства «id», «цвет» и «размер» должны быть доступны только для чтения, свойство «id» не может быть удалено.  */

let boots2 = new Object();

Object.defineProperty(boots2, 'id', {
    value: 4,
    writable: false,
    configurable: false,
});
Object.defineProperty(boots2, 'size', {
    value: 38,
    writable: false,
});
Object.defineProperty(boots2, 'color', {
    value: 'blue',
    writable: false,
});
Object.defineProperty(boots2, 'price', {
    value: 150,
    writable: false,
});


alert(boots2.id);
delete boots2.id;
alert("ID: " + boots2.id);


/*5. Добавьте в описание товара новые свойства: «скидка» и «конечная стоимость» (стоимость с учетом скидки). Добавьте геттер и сеттер для свойства «конечная стоимость», учитывая то, что свойства «скидка» и «конечная стоимость» взаимозависимые. */

Object.defineProperty(boots2, 'discount', {
    value: 10,
    writable: false,
});
Object.defineProperty(boots2, 'finalPrice', {
    get: function () {
        return this.price - this.price * this.discount / 100;
    },
    set: function (value) {
        this.discount = 100 - value / this.price * 100;
    }
});

alert(`Скидка: ${boots2.discount}`);
alert(`Конечная цена: ${boots2.finalPrice}`);