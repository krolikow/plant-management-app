import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  navLinks = [
    {
      label: 'All',
      link: '',
      index: 0
    },
    {
      label: 'Succulents',
      link: './category/1',
      index: 1
    }, {
      label: 'Tropical',
      link: './category/2',
      index: 2
    }, {
      label: 'Ornamental',
      link: './category/3',
      index: 3
    },
  ];
}
