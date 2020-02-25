let money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let oneQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
    twoQuestions = prompt("Во сколько обойдется?", ""),
    threeQuestions = prompt("Введите обязательную статью расходов в этом месяце", ""),
    fourQuestions = prompt("Во сколько обойдется?", "");

    appData.expenses[oneQuestions] = twoQuestions;
    appData.expenses[threeQuestions] = fourQuestions;

    alert(appData.budget / 30);