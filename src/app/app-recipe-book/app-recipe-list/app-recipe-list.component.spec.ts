import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecipeListComponent } from './app-recipe-list.component';

describe('AppRecipeListComponent', () => {
  let component: AppRecipeListComponent;
  let fixture: ComponentFixture<AppRecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRecipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
