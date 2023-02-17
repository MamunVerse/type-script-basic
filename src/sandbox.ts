import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';



const form = document.querySelector('.new-item-form') as HTMLFormElement;

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values : [string, string, number] ;
    
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc : HasFormatter;

    if(type.value === 'invoice'){
        doc = new Invoice(...values);
    }else{
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
    
})


// GENERICS

const addUID = <T extends {name : string}> (obj : T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name : 'Mamun', age: 40});

console.log(docOne);

// GENERICS with interfaces

interface Resource <T> {
    uid : number;
    resourceName : string;
    data : T;
}

const docThree  : Resource <object> = {
    uid : 1,
    resourceName : 'person',
    data : {name : 'Mamun', age : 25}
};


const docFour  : Resource <string> = {
    uid : 1,
    resourceName : 'person',
    data : 'Mamun'
};

const docFive  : Resource <string[]> = {
    uid : 1,
    resourceName : 'person',
    data : ['mamun', 'rony']
};


// ENUMS

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface ResourceNew <T> {
    uid : number;
    resourceType : ResourceType;
    data : T;
}

const doc6  : ResourceNew <object> = {
    uid : 1,
    resourceType : ResourceType.BOOK,
    data : {title : 'name of text'}
};


const doc7  : ResourceNew <object> = {
    uid : 10,
    resourceType : ResourceType.PERSON,
    data : {name : 'Rony', age : 25}
};

// console.log(doc6);
// console.log(doc7);



// TUPLES

let arr = ['Mamun', 25, true];

let tup : [string, number, boolean] = ['Mamun', 30, true];