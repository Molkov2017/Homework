let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

/* for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько это обойдется?", "");
    if ((typeof (a))=== "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != " " && b != " " && a.length < 50) {
            console.log("Данные введены правильно");
            appData.expenses[a] = b;
        } else {
            console.log("Неверный формат введённых данных");
            i--;

        }

    } */
let i = 0;
/* while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько это обойдется?", "");
    if ((typeof (a))=== "string" && (typeof (a)) != null && (typeof (b)) != null &&
            a != " " && b != " " && a.length < 50) {
            console.log("Данные введены правильно");
            appData.expenses[a] = b;
        } else {
            console.log("Неверный формат введённых данных");
            i--;

        }
    i++;

    } */
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько это обойдется?", "");
    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null &&
        a != " " && b != " " && a.length < 50) {
        console.log("Данные введены правильно");
        appData.expenses[a] = b;
    } else {
        console.log("Неверный формат введённых данных");
        i--;

    }
    i++;
}
while (i < 2);



appData.moneyPerDay = appData.budget / 30;
alert("Ваш ежедневный бюджет равен: " + appData.moneyPerDay + " рублей.")
console.log(appData);

if (appData.moneyPerDay <= 1000) {
    console.log("Низкий уровень дохода");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень дохода");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень дохода")
} else {
    console.log("Критическая ситуация")
}