import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';

  myCount = 1;

  changeCount(number: number) {
    this.myCount = this.myCount + number;
  }
}
