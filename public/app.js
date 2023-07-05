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
const form = document.querySelector('.new-item-form');
// console.log(form.children);
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
export {};
