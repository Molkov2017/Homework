let num = 99;

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
}