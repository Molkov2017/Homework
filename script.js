/* let num = 99;

if (num < 49) {
    console.log("Неверно!")
} else if (num > 100) {
    console.log("Очень большое число")
} else {
    console.log("Верно!")
}

(num > 100) ? console.log("Верно!") : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Очень большое число!');
        break;
    case 99:
        console.log("Верно!");
        break;
} */
//Ц И К Л Ы
/* let nom = 50; */
/* while (nom < 55) {
    console.log(nom);
    nom++;
} */
/* do {
    console.log(nom);
    nom++;
}
while (nom < 55); */

/* for ( let i = 1; i < 15; i++) {
    if (i > 11) {
        break
    }
    console.log(i)
} */
let num = 25;
function showFirstMessage (text) {
    alert(text);
    let num = 20;
    console.log(num);
}
showFirstMessage("Привет кожаный ублюдок!");
console.log(num);