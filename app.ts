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

// Generics

// function logString(arg) {
//     console.log(arg);
//     return arg;
// }

// logString('logged in');

// function logNumber(arg:number){
//     console.log(arg);
//     return arg;
// }

// function logArray(arg: any[]){
//     console.log(arg);
//     return arg;
// }

// function logAnything<T>(arg: T): T{
//     console.log(arg);
//     return arg;
// }

// logArray([4,3]);

// interface HasAge {
//   age: number;
// }

// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a,b) => b.age - a.age)[0];
// }

// const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 10 }];

// interface Player {
//     name: string;
//     age: number;
// }

// const Players:Player[] = [
//   { name: "John", age: 30 },
//   { name: "jane ", age: 35 },
//   { name: "joe", age: 16 },
// ];

// //Assertion
// // const person = getOldest(Players) as Player;

// const person = getOldest(Players);
// //Generics
// person.age

// interface IPost {
//   title: string;
//   id: number;
//   description: string;
// }

// interface IUser {
//   id: number;
//   name: string;
//   age: number;
// }

// const fetchPostData = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`https://example.com${path}`);
//   return response.json();
// };

// const fetchUserData = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`https://example.com${path}`);
//   return response.json();
// };

// const fetchData = async <ResultType>(path : string ): Promise<ResultType> => {
//     const response = await fetch(`https://example.com${path}`);
//     return response.json();
// }

// (async () => {
// //   const posts = await fetchPostData("/posts");
// const users = await fetchData<IUser[]>('/users');
// users[0].age;
// })();

// Structural typing or Duck typing

// interface ICredential {
//   username: string;
//   password: string;
//   isAdmin?: boolean;
// }

// function login(credentials: ICredential): boolean {
//   console.log(credentials);
//   return true;
// }

// const user: ICredential = {
//   username: "Tansen Keshri",
//   password: "secret",
//   isAdmin: true,
// };

// login(user);

// interface IAuth {
//   username: string;
//   password: string;
//   login(username: string, password: string): boolean;
// }

// const auth : IAuth = {
//   username: "tansen",
//   password: "secret",
//   login(username: string, password: string) {
//     return true;
//   },
// };

// // Inference
// let num = 1;
// let num2 = 'tk';
