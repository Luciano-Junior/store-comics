import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServidorService {

  private publicKey: string = "e98c4317eaee4ae88a08fc4adda489ae";
  private privateKey: string = "cc24c6d0bab687c2b7f0db34899506ca45253a68";
  private ts: string = "1";
  private hash: string = "7cf97941af1aa9c6df061a2c5e500359";

  constructor() { }

  getHash(){
    return this.hash;
  }

  getPublicKey(){
    return this.publicKey;
  }

  getTs(){
    return this.ts;
  }

  getEndPoint(){
    return environment.endpoint;
  }
}
