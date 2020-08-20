const billAmountField = document.getElementById('billAmount');
const serviceField = document.getElementById('service');
const peopleQuantityField = document.getElementById('peopleQuantity');

function calculateTip() {
    let amount = billAmountField.value;
    let service = serviceField.value;
    let people = peopleQuantityField.value;
    if(amount === '' || service === 'null' || people === '') {
        showAlert('You need to fill in all the fields!');
    } else {
        if(!Number.isInteger(parseFloat(people))) {
            showAlert('The people quantity must be an integer');
        } else {
            let tip = parseFloat(amount) * parseInt(service) / 100 / parseInt(people);
            return {tip, people};
        }
        
    }
}

function showAlert(msg) {
    document.querySelector('.err-msg h3').innerText = msg;
    document.querySelector('.error').style.display = 'flex';
}

document.getElementById('calculate-btn').addEventListener('click', (e) => {
    let result = calculateTip();
    if(result) {
        document.querySelector('.result').style.display = 'block';
        let tipAmount = result.tip.toLocaleString('en-US', {style:'currency', currency:'USD'});
        document.getElementById('resultAmount').innerText = tipAmount;
        if(result.people === '1') {
            document.querySelector('.result h3:last-child').style.display = 'none';
        } else {
            document.querySelector('.result h3:last-child').style.display = 'block';
        }
    }
    
})

document.querySelector('.error').addEventListener('click', (e) => {
    const error = document.querySelector('.error');
    
    if(window.getComputedStyle(error).display === 'flex') {
        error.style.display = 'none';
    }
})