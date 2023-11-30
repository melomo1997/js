
function menu() {
    const questions = parseFloat(
        prompt(
          "Please select a choice :\n 1. Add income\n 2. Add expense\n 3. List all expenses\n 4. Get summary"
        )
      );
  }
  
  
  //we should call it out: 
  menu()
  
  // 2. CREATE AN OBJECT FOR YOUR WEBSITE THAT HOLDS (NAME, EXPENSES, INCOME, ADDEXPENSES,ADDINCOME, LISTALLEXPENSES, AND A SUMMERY)
  const cactusObject = {
    name: "cactus",
    expenses:["gas", "food", "rent", "clothes"],
    income: [],
    addExpenses(){
        
        

    }
  };

  let question = prompt ("Please select a choice :\n 1. Add income\n 2. Add expense\n 3. List all expenses\n 4. Get summary");
  let text;
  if(question===1){
    alert ( "How much is your income?");
  } ;

  

//   function incomeChoice(){
//     const income = parseFloat(prompt(
//       "How much is your income?"
//       ));
//       return(menu());
//     };
//     incomeChoice();
//     function expensesChoice(){
//     const expenses = parseFloat(prompt(
//       "Add your expenses"
//     ));
//     return(menu());
//     };
//     expensesChoice();
//     function expensesSaveChoice(){
//     let expensesSave = parseFloat(prompt(
//       "What was your expense? (\nrent\ngas\nfood\nclothes)"
//     ));
//     return(menu());
//     };
//     expensesSaveChoice();

  
      



  
 
