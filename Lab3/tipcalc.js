document.querySelector('#form').onchange = function() {
    
    let bill = Number(document.getElementById('billTotal').value);
    let tip = document.getElementById('tips').value;   

    let tipTotal = bill * (tip/100);  
    let allTotal = bill + (bill * (tip/100));

    document.getElementById('tipPercentage').value = tip;
    document.getElementById('tipAmount').value = tipTotal.toFixed(2);
    document.getElementById('billAndTip').value = allTotal.toFixed(2);
};
