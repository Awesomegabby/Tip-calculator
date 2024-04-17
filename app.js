'use strict';

const calculateTip = function () {
  const billAmountEl = document.querySelector('#bill-amount');
  const tipPercentageEl = document.querySelector('#tip-percentage');
  const tipAmountEl = document.querySelector('#tip-amount');
  const totalAmountEl = document.querySelector('#total-amount');

  let billAmount = Number(billAmountEl.value);
  let tipPercentage = tipPercentageEl.value / 100;

  const clear = function () {
    billAmountEl.value = '';
    tipPercentageEl.value = '';
  };
  clear();

  let tipAmount = (billAmount * tipPercentage).toFixed(2);
  let totalAmount = (billAmount + Number(tipAmount)).toFixed(2);

  tipAmountEl.textContent = `$${tipAmount}`;
  totalAmountEl.textContent = `$${totalAmount}`;
};
