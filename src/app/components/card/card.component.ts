import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() comics: any[] = [];

  carrinho: Array<any> = [];

  constructor() { }

  @ViewChild(NavbarComponent, {static:false})
  navbar: NavbarComponent;

  ngOnInit() {
    this.navbar.getCarrinho();
  }

  adicionado(id){
    this.adicionarCarrinho(id);
  }

  adicionarCarrinho(id){
    const comic = this.comics.filter(comic => comic.id == id);
    let getItem = JSON.parse(localStorage.getItem('comics'));
    this.carrinho = getItem ? getItem :[];
    this.carrinho = [...this.carrinho, comic[0]];
    localStorage.setItem('comics',JSON.stringify(this.carrinho));
  }

}
