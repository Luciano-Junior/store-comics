import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  public comics = [];
  public percentual = 0;
  loading: Boolean = false;
  public options: Array<any> = [];

  constructor(public comicsService: ComicsService) { }

  ngOnInit() {
    this.getComics();
  }

  getComics(){
    this.loading = true;
    this.comicsService.getComics()
    .subscribe((data: any)=>{
      this.loading = false;
      this.comics = this.verifyPrices(data.data.results);
    });
  }

  verifyPrices(comics){
    comics.map(function( elem ) {
      if(elem.prices[0].price == 0){
        elem.prices[0].price = 4.99;
      }
    });
    return comics;
  }

  setRare(options){
    this.comics.map(elem =>{
      if(elem.id == options[0]){
        elem.rare = true;
      }
      if(elem.id == options[1]){
        elem.rare = true;
      }
    });
  }

  addItem(){
    this.comicsService.addItem(1);
  }

  percent(){
    return (this.comics.length * 10) / 100
  }

}
