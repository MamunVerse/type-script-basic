
import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mamun', 'work in js', 250);
const invTwo = new Invoice('Rony', 'work on html', 200);

let invoices : Invoice[] = []

invoices.push(invOne);
invoices.push(invTwo);
 
console.log(invoices);


 


const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

   