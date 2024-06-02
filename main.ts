#!/ usr/bin/enr node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let mypin =3579;
let pinAnswer = await inquirer.prompt(
    [
       {
          name: "pin",
          type : "number",
          message : "Enter your pin:",
       }
    ]
);
if (pinAnswer.pin === mypin){
    console.log("Correct pin code!!!");
 let operationsAns = await inquirer.prompt([
    {
        name : "operation",
        type : "list",
        message :"please select option",
        choices:["Withdraw","fastCash","Check balance"]
    }
]);
if (operationsAns.operation === "Withdraw"){
    let amountAns = await inquirer.prompt([
        {
            name : "amount",
            type : "number",
            message : "Enter your amount:"
        }
    ]);
    if (amountAns.amount > myBalance){
        console.log("Insufficient balance");
    }
    // = += -=
    else {
        myBalance -= amountAns.amount
    console.log("you remaining balance is "+myBalance);
    }
}
else if(operationsAns.operation === "fastcash"){
    let fastcash =await inquirer.prompt(
        [
            {
                name : "fastcash",
                type : "list" ,
                message : "select the amount which you withdrawl",
                choices :[1000,2000,5000,1000]
            }
            
        ]
    );
    myBalance -= fastcash.fast
    console.log(`you have suessfully withdrawl ${myBalance}\nyour remaining balance:`);
    
}
else if (operationsAns.operation === "Check balance"){
    console.log(`you remaining balance is ${+myBalance}`);
}

}
else {
    console.log("Incorrect pin code.");
}