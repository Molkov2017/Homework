'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц,", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExprensive() {
    for (let i = 0; i < 2; i++) {
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

    }
}
chooseExprensive();

function chooseOptExpensive() {
    for (let i = 0; i < 3; i++) {
        let questingOptExpenses = prompt("Введите необязательную статью расходов:");
        if ((typeof (questingOptExpenses)) === "string" && (typeof (questingOptExpenses)) != null &&
        questingOptExpenses != " " && questingOptExpenses.length < 50) {
            appData.optionalExpenses[i] = questingOptExpenses;
        } else {
            console.log("Неверный формат введённых данных");
            i--;
        }
    }
}
chooseOptExpensive();

function detectDayBudget() {
    appData.moneyPerDay = appData.budget / 30;
    alert(`Ваш ежедневный бюджет равен: ${Math.round(appData.moneyPerDay)} рублей`);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay <= 1000) {
        alert("К сожалению у Вас низкий уровень дохода");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
        alert("Неплохо, у Вас средний уровень дохода");
    } else if (appData.moneyPerDay > 2000) {
        alert("Поздравляем, у Вас высокий уровень дохода");
    } else {
        console.log("Критическая ситуация");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какое количество средств хранится на депозите?", ""),
            percent = +prompt("Под какой процент хранятся средства?", "");
        appData.monthIncome = save / 100 / 12 * percent;
        alert("Ежемесячный доход с Вашего депозита составляет: " + Math.round(appData.monthIncome) +
            " рублей.");
    }
}
checkSavings();

console.log(appData);