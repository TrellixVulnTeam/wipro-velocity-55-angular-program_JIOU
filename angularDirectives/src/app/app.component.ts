import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDirectives from parent component (app component)';
  constructor(private el: ElementRef) {
  }
  msgfromChild = ''
  addMessage(val: string) {
    this.msgfromChild = val
  }

  productList: Product[] = [
    {
      id: 101,
      name: "Dell",
      price: 35000.45,
      quantity: 10
    },
    {
      id: 102,
      name: "HTC",
      price: 15000.50,
      quantity: 50
    }
  ]



}
export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}