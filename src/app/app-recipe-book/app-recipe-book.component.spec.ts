import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecipeBookComponent } from './app-recipe-book.component';

describe('AppRecipeBookComponent', () => {
  let component: AppRecipeBookComponent;
  let fixture: ComponentFixture<AppRecipeBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRecipeBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecipeBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
