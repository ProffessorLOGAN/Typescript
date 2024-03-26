// Type alias

// type User = {
//   name: string;
//   age: number;
//   address?: string;
// };

// const user: User = {
//   name: "Tansen Keshri",
//   age: 24,
// };

// function login(userData: User): User {
//   return userData;
// }

// console.log(login(user));

// type ID = number | string ;

// const userId: ID = '123';

// Interfaces

// interface Transaction {
//   payerAccountNumber: number;
//   payeeAccountNumber: number;
// }

// interface BankAccount {
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transaction: Transaction[];
// }

// const transaction = {
//   payerAccountNumber: 123,
//   payeeAccountNumber: 500,
// };

// const bankAccount: BankAccount = {
//   accountNumber: 123,
//   accountHolder: "John Doe",
//   balance: 1000,
//   isActive: true,
//   transaction: [transaction],
// };

// Extend

// interface Book {
//   name: string;
//   price: number;
// }

// interface EBook extends Book {
//   //   name: string;
//   //   price: number;
//   fileSize: number;
//   format: string;
// }

// interface AudioBook extends EBook {
//   //   name: string;
//   //   price: number;
//   //   fileSize: number;
//   //   format: string;
//   duration: number;
// }

// const book: AudioBook = {
//   name: "Atomic habits",
//   price: 250,
//   fileSize: 5,
//   format: "mp3",
//   duration: 5,
// };

// // Merge Interface

// interface Book {
//   name: string;
//   price: number;
// }

// interface Book {
//   size: number;
// }

// const book: Book = {
//     name:'Atomic Habbits',
//     price:200,
//     size: 2,
// };

// Unions

// type ID = number | string;

// // Narrowing
// function printId(id: ID) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// printId("1");

// function getFirstThree(x: string | number[]){
//     return x.slice(0,3);
// }

// console.log(getFirstThree([1,3,5,6,7]));