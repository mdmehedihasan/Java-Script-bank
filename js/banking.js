document.getElementById('deposit_btn').addEventListener('click', function () {

    //get the amount deposited
    const depositInput = document.getElementById('depositInput');
    const newDepositAmount = parseFloat(depositInput.value);


    //where to deposit
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = parseFloat(depositTotal.innerText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update balance
    const previousBalance = document.getElementById('balance-total');
    const allPreviousBalance = parseFloat(previousBalance.innerText);
    const newTotalBalance = newDepositTotal + allPreviousBalance;
    previousBalance.innerText = newTotalBalance;



    // clear the deposit input field
    depositInput.value = '';





})
// withdraw money
document.getElementById('withdraw_btn').addEventListener('click', function () {

    //withdraw amount
    const reqWithdrawAmount = document.getElementById('withdraw-Input');
    const reqInputValue = parseFloat(reqWithdrawAmount.value);

    // where to show withdraw value
    const withdrawReq = document.getElementById('withdraw-total');
    const totalWithdrawAmount = parseFloat(withdrawReq.innerText);

    withdrawReq.innerText = reqInputValue + totalWithdrawAmount;

    //update balance
    const balance = document.getElementById('balance-total');
    const prvBalance = parseFloat(balance.innerText);
    const newBalance = prvBalance - reqInputValue;

    // where to show total balance
    balance.innerText = newBalance;

    //clear the withdraw input field
    reqWithdrawAmount.value = '';

})
