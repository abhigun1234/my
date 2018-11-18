import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrestaurentmentComponent } from './postrestaurentment.component';

describe('PostrestaurentmentComponent', () => {
  let component: PostrestaurentmentComponent;
  let fixture: ComponentFixture<PostrestaurentmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostrestaurentmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostrestaurentmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
