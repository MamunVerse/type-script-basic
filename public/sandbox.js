import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mamun', 'work in js', 250);
const invTwo = new Invoice('Rony', 'work on html', 200);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
