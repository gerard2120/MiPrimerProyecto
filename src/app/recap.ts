// tipado de variables uno o mas
const usernames: string | number = 'Nicolas';

// funciones flecha con tipado
const sum = (a : number, b: number)=>{
  return a + b;
}
sum(1,1);

// class Person{
//   age: number;
//   lastName: string;

//   constructor(age: number, lastName: string){
//     this.age = age;
//     this.lastName = lastName;
//   }
// }

// esta clase equivale a la clase arriba
class Person{
  constructor(public age:number, public lastName: string){}
}

const gerardo = new Person(27, 'Diaz');
gerardo.age;
