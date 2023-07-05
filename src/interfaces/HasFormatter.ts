// interface IsPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: IsPerson = {
//     name: "Aayush",
//     age: 30,
//     speak(text: string): void {
//         console.log(text)
//     },
//     spend(amount: number): number {
//         console.log('I spend', amount);
//         return amount;
//     },
// };

// console.log(me);



export interface HasFormatter {
    format(): string;
}