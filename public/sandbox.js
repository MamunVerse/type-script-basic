import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// GENERICS
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'Mamun', age: 40 });
console.log(docOne);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Mamun', age: 25 }
};
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: 'Mamun'
};
const docFive = {
    uid: 1,
    resourceName: 'person',
    data: ['mamun', 'rony']
};
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const doc6 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of text' }
};
const doc7 = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'Rony', age: 25 }
};
// console.log(doc6);
// console.log(doc7);
// TUPLES
let arr = ['Mamun', 25, true];
let tup = ['Mamun', 30, true];
