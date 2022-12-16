//1. Представьте фигуры на картинке в виде объектов. Обратите внимание, фигуры имеют одинаковые параметры.
const square = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    background: 'yellow'
}

const circle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'white'
}

const triangle = {
    width: '100px',
    height: '100px',
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    middleLine: true, 
}

const secondsquare = {
    width: '100px',
    height: '100px',
    border: '10px solid black',
    background: 'yellow'
}

const secondCircle = {
    width: '200px',
    height: '200px',
    border: '10px solid black',
    borderRadius : '50%',
    background: 'green'
}

const secondTriangle = {
    width: '100px',
    height: '100px',
    borderColor: 'transparent transparent #fff transparent',
    borderWidth: '0 30px 30px 30px',
    threeMiddleLines: true, 
}

//Выведите: свойства, которые отличают фигуру «зеленый круг»; 
   const propsOne = Object.getOwnPropertyNames(circle);
   const propsTwo = Object.getOwnPropertyNames(secondCircle);

   for(let counter = 0; counter < propsOne.length; counter++){
        if(circle[propsOne[counter]] != secondCircle[propsTwo[counter]]){
            alert("Отличия : " + circle[propsOne[counter]] + " - " + secondCircle[propsTwo[counter]]);
        }
    }

//свойства, которые описывают фигуру «треугольник с тремя линиями»;
    const propsOne1 = Object.getOwnPropertyNames(triangle);
    let result = 'Треугольник:\n';
    for(let counter = 0; counter < propsOne1.length; counter++){
        result += propsOne1[counter] + " - " + triangle[propsOne1[counter]]+"\n";
    }
    alert(result);

//есть ли у фигуры «маленький квадрат» собственное свойство, которое определяет цвет фигуры.

const propsOne2 = Object.getOwnPropertyNames(secondsquare);
const propsTwo2 = Object.getOwnPropertyNames(square);
let state = 0;
for (let counter = 0; counter < propsOne2.length; counter++) {
    if (secondsquare[propsOne2[counter]] == 'yellow') {
        for (let x = 0; x < propsOne.length; x++) {
            if (propsOne2[counter] == propsTwo2[x]) {
                alert('Цвет маленького квадрата не является уникальным');
                state++;
                break;
            }
        }
    }
}
    
if (state == 0) {
       alert('Цвет маленького квадрата не является уникальным');
}
