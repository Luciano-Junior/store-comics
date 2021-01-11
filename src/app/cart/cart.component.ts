import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itens: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.getItens();
  }

  getItens(){
    this.itens = JSON.parse(localStorage.getItem('comics'));
  }

  removeItemCart(item){
    this.itens.splice(this.itens.indexOf(item, 1));
    localStorage.setItem('comics', JSON.stringify(this.itens));
  }

  calcTotalCart(){
    let total = 0;
    this.itens.map(item => {
      total = total + item.prices[0].price;
    });

    return total;
  }

}
