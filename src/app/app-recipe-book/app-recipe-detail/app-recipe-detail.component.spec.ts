import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecipeDetailComponent } from './app-recipe-detail.component';

describe('AppRecipeDetailComponent', () => {
  let component: AppRecipeDetailComponent;
  let fixture: ComponentFixture<AppRecipeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRecipeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecipeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
