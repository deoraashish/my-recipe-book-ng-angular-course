import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppShoppingListComponent } from './app-shopping-list.component';

describe('AppShoppingListComponent', () => {
  let component: AppShoppingListComponent;
  let fixture: ComponentFixture<AppShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
