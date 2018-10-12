const cost = document.getElementById('cost');
const tip = document.getElementById('tip');
const calculate = document.getElementById('calculate');
const tipTotal = document.getElementById('tip-total');
const total = document.getElementById('total');

cost.value = 0.00;
tip.value = 15;

calculate.onclick = (event) => {
    const costValue = parseFloat(cost.value);
    const tipPercent = tip.value / 100;
    const totalTip = (costValue * tipPercent);
    const grandTotal = parseFloat(totalTip + costValue);
    
    tipTotal.innerHTML = '$' + totalTip.toFixed(2);
    total.innerHTML = '$' + parseFloat(grandTotal).toFixed(2);
};
