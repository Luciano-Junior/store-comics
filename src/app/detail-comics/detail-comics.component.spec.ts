import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComicsComponent } from './detail-comics.component';

describe('DetailComicsComponent', () => {
  let component: DetailComicsComponent;
  let fixture: ComponentFixture<DetailComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
