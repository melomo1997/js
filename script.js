const account = {
  name: "MeliKa",
  //expenses: ["gas", "food", "rent", "clothes"],
  expenses: [],
  // [{category: "gas", amount: 1000}, {category: "food", amount: 500}]
  incomes: [],
  // addExpenses: FUNCTION AND ... .push, SO THAT IT WILL ADD AN ARRAY TO EXPENSES
  addExpense: function () {
    const category = prompt(
      "What was your expense? (\nrent\ngas\nfood\nclothes)"
    );

    const amount = parseFloat(prompt("How much is your income?"));

    this.expenses.push({ expensesCategory: category, expenseAmount: amount });

    // const expensesAmount = parseFloat(prompt("How much is your expenses"));
    // console.log(this.expenses);
    menu();
  },
  addIncome: function () {
    const amount = parseFloat(prompt("How much is your income?"));

    this.incomes.push({
      incomesAmount: amount,
    });
    menu();
  },

  listAllExpenses: function () {
    // 1. we want to list all expenses we added in our array for the user
    // 2. in order to list all elements in a array we need a loop (foreach)
    // 3. each expense should be shown on one row with the category and amount
    // 4. we want to the list show in an alert

    let message = "";
    // we need to declare message here so we can pass that to the alert

    this.expenses.forEach(function (expense) {
      // expense inside () is going to represent ONE expense in our exoenses array
      // so javascript that expense inside () is actually an object

      // we are going to build a custom message just a normal string with our properties

      message +=
        "Expense category: " +
        expense.expensesCategory +
        " Expense amount: " +
        expense.expenseAmount +
        "\n";

      //alert("Expense category " + expense.expensesCategory);
      // this show ONE alert for EACH category which is not what we want
    });

    alert(message);
  },
  summary: function () {

      // 1. calculate total incomes - total expenses and show the result

    // 2. first we need to calculate the total incomes and save it in a variable, hint: you need to use a loop
    let totalIncomes = 0;
    let totalExpenses = 0;
    
    this.incomes.forEach(function (income) {
      totalIncomes += income.incomesAmount
    });

    this.expenses.forEach(function (expense) {
      totalExpenses += expense.expenseAmount
    });

    const result = totalIncomes - totalExpenses;
    alert(`Your Total Incomes: ${totalIncomes} \n Your Total expenses: ${totalExpenses}`);

    // 3. we need to do the same for expenses, keep in mind that you only are interested in expense.expenseAmount not the category
    // 4. with this said we need two variables, one for total incomes and one for total expenses
    // 5. then we need to create a new variable to store the result of totalIncomes - totalExpenses
    // 6. once that is done you can show the result to the user for example in an alert
    
  },
};

//2. WE NEED A FUNCTION MENU:
function menu() {
  const choice = parseFloat(
    prompt(
      "Please select a choice :\n1.Add income\n2.Add expense\n3.List all expenses\n4. Get summary"
    )
  );

  // if/else STATEMENT:
  if (choice === 1) {
    account.addIncome();
  } else if (choice === 2) {
    account.addExpense();
  } else if (choice === 3) {
    account.listAllExpenses();
  } else if (choice === 4) {
    account.summary();
  } else if (choice < 0 && choice > 4 && choice != Number) {
    alert("Unvalid answer, choose a number between 1 to 4 please!");
    menu();
  }
}

//we should call it out:
menu();