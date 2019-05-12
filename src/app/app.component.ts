import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items = [
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros'
  ];
}
