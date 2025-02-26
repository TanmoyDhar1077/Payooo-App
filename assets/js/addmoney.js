document.getElementById('add-money-submit').addEventListener('click', function (event) {
    event.preventDefault();
    const amount = document.getElementById('add-money-amount').value;
    const amountFloat = parseFloat(amount);
    console.log(amountFloat);
    
});