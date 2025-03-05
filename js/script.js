const init = function() {
    document.getElementById('submit-btn').addEventListener('click', send);
}

document.addEventListener('DOMContentLoaded', init);

const send = function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let ret = validate();
    document.querySelector('.error').innerHTML = '';

    if (ret) {
        const billAmount = parseFloat(document.getElementById('bill').value);
        const tipPercentage = parseFloat(document.querySelector('input[name="tip"]:checked').value);
        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalAmount = billAmount + tipAmount;

        document.getElementById('tip-amount').innerHTML = `CHF ${tipAmount.toFixed(2)}`;
        document.getElementById('total-amount').innerHTML = `CHF ${totalAmount.toFixed(2)}`;
    } else {
        let err = document.querySelector('.error');
        err.textContent = 'Please fill in all required fields.';
    }
}

const validate = function() {
    const billInput = document.getElementById('bill');
    const tipInputs = document.querySelectorAll('input[name="tip"]');
    const isTipSelected = Array.from(tipInputs).some(input => input.checked);

    return billInput.value.trim() !== '' && isTipSelected;
}