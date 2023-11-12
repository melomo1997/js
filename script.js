


// TO DO LIST
// 1-CREAT AN OBJECT FOR YOUR WEBSITE

const cactusObject = {
    name:"Cactus",
    expenses:[],
    income:[],
    function addExpenses (){
        prompt(
            'what was your expense?(rent/gas/food etc)'
            )

    }
}
 console.log(cactusObject);



// 2-CREAT A PROMP
function menu(){
    const question =parseFloat(
        prompt(
            'Please select from the menu: \n1) Add Income\n2) Add Expences\n3) List All Expences\n4) Get Summery'
        )
    )
};

switch(choices) {
    case 1:
        prompt(
            "add your incom"
        )
        break;
    case 2:
            prompt(
                "add your expences"
            )
            break;
    case 3:
            prompt(
                "what was your expences?(gas/food/rent)"
            )
            break;
    default:
}


const info = prompt("Please select from the menu: \n1) Add Income\n2) Add Expenses\n3) List All Expenses\n4) Get Summary");

switch (info) {
  case "1":
    prompt("You selected: Add Income");
    // Perform the necessary actions for adding income
    break;
  case "2":
    prompt("You selected: Add Expenses");
    // Perform the necessary actions for adding expenses
    break;
  case "3":
    prompt("You selected: List All Expenses");
    // Perform the necessary actions for listing all expenses
    break;
  case "4":
    prompt("You selected: Get Summary");
    // Perform the necessary actions for getting the summary
    break;
  default:
    prompt("Invalid selection");
    break;
}


