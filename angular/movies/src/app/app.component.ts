import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  moviesitem: any[] = [];
  Input!: any;

  updateData(item: any) {
    this.Input = item;
    console.log(this.Input)
    fetch(`https://www.omdbapi.com/?s=${this.Input}&apikey=d188544e`)
      .then((res) => res.json())
      .then((data) => {
        this.moviesitem = data.Search; // Assuming the response has a property named Search which contains movie items
        console.log(this.moviesitem); // Log inside the promise chain to ensure it logs after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }
}
