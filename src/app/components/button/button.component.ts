import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() comic: any;
  @Output() adicionar = new EventEmitter();
  
  constructor(public router: Router) { }

  ngOnInit() {
  }

  move(id){
    this.router.navigate(['detail',id]);
  }

  resposta(id){
    this.adicionar.emit(id);
  }

}
