import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('Yoshi', 'web work', 250);
// docTwo = new Payment('Mario', 'Plumbing work', 300);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// const invone =  new Invoice("Aayush", "Work on a website", 100);
// const invtwo =  new Invoice("Luigi", "Work on luigi website", 300);

// let invoices: Invoice[] = [];
// invoices.push(invone);
// invoices.push(invtwo);

// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
     e.preventDefault();

     console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
        )
})