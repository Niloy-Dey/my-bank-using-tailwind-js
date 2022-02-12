    //deposit     //withdraw    //balance
    let depositInput = document.getElementById('input-deposit');
    let depositOutput = document.getElementById('deposit');
    let withdrawInput = document.getElementById('input-withdraw');
    let withdrawOutput = document.getElementById('withdraw');
    let balanceOutput = document.getElementById('balance');

function addAmount(inputAmount, currentAmount){
    return parseFloat(inputAmount) + parseFloat(currentAmount);
}
//deposit
function depositFunction(){
    depositOutput.innerText = addAmount(depositInput.value, depositOutput.innerText);
    balanceOutput.innerText = addAmount(balanceOutput.innerText, depositInput.value );
    depositInput.value = '';
}
//withdraw
function withdrawFunction(){
    withdrawOutput.innerText = parseFloat(withdrawInput.value) + parseFloat(withdrawOutput.innerText);
    balanceOutput.innerText = addAmount(balanceOutput.innerText , -withdrawInput.value); 
    withdrawInput.value = '';
}





//===============  Another process of javascript function used for calculation ========================

// function getInput(inputId){
//     const amountInput = document.getElementById(inputId);
//     const inputMoney = parseFloat(amountInput.value);
//     amountInput.value = '';
//     return  inputMoney;
// }
// function getCurrentBalance(currentAmountId, inputMoney){
//     const currentAmount = document.getElementById(currentAmountId);
//     const currentMoneyAmount = parseFloat( currentAmount.innerText);
//     currentAmount.innerText = currentMoneyAmount + inputMoney;
// }
// function updateBalanceMoney(amount, isAdd){
//     const currentBalance = document.getElementById('balance');
//     const currentBalanceAmount =parseFloat( currentBalance.innerText);
//     if(isAdd == true){
//         currentBalance.innerText =currentBalanceAmount + amount;
//     }else{
//         currentBalance.innerText =currentBalanceAmount - amount;
//     }
// }
// document.getElementById('deposit-btn').addEventListener('click', function(event){
//     event.preventDefault();
//     const depositAmount = getInput('input-deposit');
//     const updateDeposit = getCurrentBalance('deposit',depositAmount );
//     const updateAccountBalance = updateBalanceMoney(depositAmount , true);
// })
// //  Event handler for withdraw button
// document.getElementById('withdraw-btn').addEventListener('click', function(event, updateBalance){
//     event.preventDefault();
//     const withdrawAmount = getInput('input-withdraw');
//     const updateWithdraw = getCurrentBalance('withdraw',withdrawAmount );
//     const withdrawupdateBalance = updateBalanceMoney( withdrawAmount, false);
// })


//============================  normal js used for calculation ==============================


// //  Event handler for deposit button
// document.getElementById('deposit-btn').addEventListener('click', function(event){
//     event.preventDefault();
//     // console.log('deposit click');
//     const depositInput = document.getElementById('input-deposit');
//     const depositAmount = depositInput.value;
//     // console.log(depositAmount);
//     const updateDeposit = document.getElementById('deposit');
//     const currentDepositAmount =  ( updateDeposit.innerText);
//     const newDepositamount =parseFloat(currentDepositAmount) + parseFloat(depositAmount);
//     updateDeposit.innerText = newDepositamount;
//     // clear the input field 
//     depositInput.value = '' ;


//     // Balance updating process
//     const currentBalance = document.getElementById('balance');
//     const currentBalanceAmount = currentBalance.innerText;
//     // console.log(currentBalanceAmount);
//     const updateBalance = parseFloat(currentBalanceAmount) + parseFloat(depositAmount);
//     currentBalance.innerText = updateBalance;
    

  
// })

// //  Event handler for withdraw button
// document.getElementById('withdraw-btn').addEventListener('click', function(event, updateBalance){
//     event.preventDefault();
//     // console.log('withdraw click');
//     const withdrawInput = document.getElementById('input-withdraw');
//     const withdrawAmount = parseFloat(withdrawInput.value);
//     // console.log(typeof(withdrawAmount));
//     const currentWithdraw = document.getElementById('withdraw');
//     const currentWithdrawAmount = parseFloat(currentWithdraw.innerText);
//     //set withdraw total
//     const updateWithdraw = withdrawAmount + currentWithdrawAmount;
//     currentWithdraw.innerText = updateWithdraw;
//     withdrawInput.value = '';


//     //substituting the money of total balance
//     const newBalanceTotal = document.getElementById('balance');
//     const newMoney = parseFloat(newBalanceTotal.innerText);
//     // console.log(newMoney);
//     const finalBalance = newMoney - withdrawAmount;
//     newBalanceTotal.innerText = finalBalance;
// })



