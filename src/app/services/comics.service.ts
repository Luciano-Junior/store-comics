import { Injectable } from '@angular/core';
import { ServidorService } from './servidor.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  itens: number = 0;

  constructor(private servidor: ServidorService, public http: HttpClient) { }
  getComics(){
    return this.http.get(`${this.servidor.getEndPoint()}?ts=1&apikey=e98c4317eaee4ae88a08fc4adda489ae&hash=7cf97941af1aa9c6df061a2c5e500359`)
    .pipe(res => res);
  }

  getDetails(id){
    return this.http.get(`${this.servidor.getEndPoint()}/${id}?ts=1&apikey=e98c4317eaee4ae88a08fc4adda489ae&hash=7cf97941af1aa9c6df061a2c5e500359`)
    .pipe(res => res);
  }

  addItem(item){
    this.itens = this.itens + item;
  }

  getCarrinho(){
    return JSON.parse(localStorage.getItem('comics'));
  }

}
