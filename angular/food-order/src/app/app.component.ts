import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'food-order';
  

  tiffinitems = [
  {
    itemtitle: 'Dosa',
    url: '',
    price: '₹40',
  },
  {

    itemtitle: 'Vada',
    url: '',
    price: '₹40',

  },

  {

    itemtitle: 'Idly',
    url: '',
    price: '₹40',

  },

  {

    itemtitle: 'Utappam',
    url: '',
    price: '₹40',

  },

  {

    itemtitle: 'Setdhosa',
    url: '',
    price: '₹50',

  },

  {

    itemtitle: 'plan Dosa',
    url: '',
    price: '₹30',

  }
];
}

console.log(AppComponent)