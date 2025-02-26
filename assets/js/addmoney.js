document.getElementById('add-money-submit').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('add-money-amount').value;
    const amountFloat = parseFloat(amount);
    // console.log(amountFloat);
    const pinNumber = document.getElementById('add-money-pin').value;
    const convertedPin = parseInt(pinNumber);
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceFloat = parseFloat(mainBalance);
    
    if(convertedPin === 1234){
        const newBalance = mainBalanceFloat + amountFloat;
        document.getElementById('main-balance').innerText = newBalance;
        
        // alert('Money Added Successfully');
    }
    else{
        alert('Invalid Pin Number');
    }
    
});