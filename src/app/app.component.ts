import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  num1 = 0;
  num2 = 0;
  suma = 0;
  promedio = 0;

  Limpiar() {
    this.num1 = 0;
    this.num2 = 0;
    this.suma = 0;
    this.promedio = 0;
  }

  Calcular(){
    this.suma = this.num1 + this.num2;
    this.promedio = this.suma / 2;
  }
}

