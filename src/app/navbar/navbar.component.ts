import { Component, OnInit, ViewChild } from '@angular/core';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  itens: Array<any> = []; 

  constructor(public comicService: ComicsService) {
  }

  ngOnInit() {
  }

  getCarrinho(){
    this.itens = JSON.parse(localStorage.getItem('comics')) ? JSON.parse(localStorage.getItem('comics')) : [];
  }

}
