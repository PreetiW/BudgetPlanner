const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const addExpenseBtn = document.querySelector('#add-expense');
const cancelBtn = document.querySelector('#cancel');
const expenseList = document.querySelector('#expenses-list');
const totalExpense = document.querySelector('#total-expense');

let totalAmount = 0;

const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
};

function presentAlert() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Invalid Inputs';
  alert.message = 'Please enter all the data';
  alert.buttons = ['OK'];

  document.body.appendChild(alert);
  return alert.present();
}

addExpenseBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    presentAlert();
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = `${enteredReason}: \u20B9 ${enteredAmount}`;
  expenseList.appendChild(newItem);
  totalAmount += parseInt(enteredAmount);
  totalExpense.textContent = totalAmount;
  clear();
});

cancelBtn.addEventListener('click', clear);
