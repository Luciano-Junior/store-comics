import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicsService } from '../services/comics.service';

@Component({
  selector: 'app-detail-comics',
  templateUrl: './detail-comics.component.html',
  styleUrls: ['./detail-comics.component.css']
})
export class DetailComicsComponent implements OnInit {

  paramId: number = 0;
  detail: Array<any> = [];

  constructor(private activatedRoute: ActivatedRoute, public comicService: ComicsService) { }

  ngOnInit() {
    this.getParams();
    this.getDetail(this.paramId);
  }

  getParams(){
    this.activatedRoute.params.subscribe(params =>{
      this.paramId = params.id;
    });
  }

  getDetail(id){
    this.comicService.getDetails(id)
    .subscribe((data: any)=>{
      this.detail = data.data.results[0];
      console.log(data.data.results[0]);
    });
  }

}
