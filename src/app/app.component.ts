import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Nicolas';
  age = 18;
  img = 'https://source.unsplash.com/random'
  btnDisabled = true;
  Person = {
    name: 'Gerardo',
    age: 26,
    avatar: 'https://source.unsplash.com/random'
  }
  register = {
    name: '',
    email: '',
    password: ''
  };
  emojis: String[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newName = '';
  box = {
    width : 10,
    height : 100,
    background : 'red'
  }
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]


  toggleButton(){
    // negamos el vallor para switchearlos
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.Person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.Person.name = element.value;
  }

  addName(){
    this.emojis.push(this.newName)
    this.newName = '';
  }

  deleteName( index: number){
    this.emojis.splice(index, 1)
  }

  onRegister(){
    console.log(this.register);
  }

}
