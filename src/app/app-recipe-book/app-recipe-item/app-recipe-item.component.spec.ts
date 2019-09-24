import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecipeItemComponent } from './app-recipe-item.component';

describe('AppRecipeItemComponent', () => {
  let component: AppRecipeItemComponent;
  let fixture: ComponentFixture<AppRecipeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppRecipeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecipeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
