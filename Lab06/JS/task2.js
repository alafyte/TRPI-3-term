let products = new Array();

/*Класс Product должен позволять:
- добавлять товар на страницу;
- удалять конкретный товар (например, по коду);
- устанавливать изображение товара (ссылку на изображение можно передавать в качестве параметры метода);
- устанавливать название товара;
- устанавливать стоимость товара;
 */

class Product {
    constructor(id, price, name, img, background) {
        this.id = id;   
        this.price = price;
        this.name = name;
        this.img = img;
        this.background = background;
        products.push(this);
    }

    //Добавление товара
    addProduct() {
        let div = document.createElement('div');
        div.className = "infoblock";
        div.style.width = '300px';
        div.style.height = '350px';
        div.style.textAlign = 'center';
        div.style.background = this.background;

        allProducts.append(div);
        allProducts.style.width = '100%';
        allProducts.style.display = 'flex';
        allProducts.style.flexWrap = 'wrap';
        let img = document.createElement('img');
        img.src = this.img;
        img.style.width = '300px';
        img.style.height = '200px';
        div.prepend(img);

        let p = document.createElement('p');
        p.innerHTML = this.name;
        p.style.fontSize = '20px';
        p.style.fontWeight = 'bold';
        div.append(p);
        let p2 = p.cloneNode(true);
        p2.innerHTML = this.price + " $";
        p2.style.fontSize = '12px';
        div.append(p2);
        let button = new Button(150, 75, 'blue','Купить сейчас');
        div.append(button.addProductButton()); 
        
    }

    //Удаление товара по коду
    Delete(id) {
        let arr = document.getElementsByClassName('infoblock');
        for (let x = 0; x < arr.length; x++) {
            if ((x + 1) == id) {
                arr[x].remove();
            }
        }
        let size = Object.getOwnPropertyNames(this);
        for(let i = 0; i < size.length; i++){
            delete this[size[i]];
        }
    }
    
}


/*Для создания кнопок разработайте класс Button, который позволяет:
- создать, удалить кнопку;
- устанавливать размеры кнопки;
- устанавливать фон кнопки;
- устанавливать текст кнопки.
 */
class Button {

    constructor(width, height, background, text) {
        this.width = width;
        this.height = height;
        this.text = text;
        this.background = background;
    }

    //Создание кнопок
    addProductButton() {
        let button = document.createElement('button');
        button.innerHTML = this.text;
        button.id = this.id;
        button.style.width = this.width;
        button.style.height = this.height;
        button.style.background = this.background;
        button.style.color = 'white';
        button.style.border = '5px solid blue';
        button.style.borderRadius = '5px';
        return button;
    }
}

//После того как все товары добавлены на страницу, найдите все нечетные товары и задайте им серый фон.
function backgroundOdd(){
    let arr = document.getElementsByClassName('infoblock');
    for(let i = 0; i < arr.length; i++) {
        if ((i + 1) % 2 == 1 || (i + 1) == 1 || (i+1) == 0) {
            arr[i].style.background = 'gray';
        }
    }
}


let first = new Product(1, 10000,'MacBook Pro 11', "Files/Laptop.jpeg", 'white');
first.addProduct();
let second = new Product(2, 15000,'MacBook Pro 12', "Files/Laptop.jpeg", 'white');
second.addProduct();
let third = new Product(3, 20000,'MacBook Pro 13', "Files/Laptop.jpeg", 'white');
third.addProduct();
let fourth = new Product(4, 25000,'MacBook Pro 14', "Files/Laptop.jpeg", 'white');
fourth.addProduct();
let fifth = new Product(5, 30000,'MacBook Pro 15', "Files/Laptop.jpeg", 'white');
fifth.addProduct();
let sixth = new Product(6, 35000,'MacBook Pro 16', "Files/Laptop.jpeg", 'white');
sixth.addProduct();
backgroundOdd();

//Кнопка удаления
const but1 = document.createElement('button');

but1.setAttribute("id","button1");
const cont = document.querySelector('body');
cont.append(but1);
button1.onclick = function() {
    let i = 1;
    first.Delete(i);
    i++;
};
  but1.innerText = "DEL"


//Кнопка добавления
const but2 = document.createElement('button');

but2.setAttribute("id", "button2");
cont.append(but2);
button2.onclick = function() {
    let first = new Product(1, 10000, 'MacBook Pro 11', "Files/Laptop.jpeg", 'white');
    first.addProduct();
  };

but2.innerText = "ADD";
but2.style.width = 200;
