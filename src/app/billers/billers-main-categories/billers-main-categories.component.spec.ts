import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillersMainCategoriesComponent } from './billers-main-categories.component';

describe('BillersMainCategoriesComponent', () => {
  let component: BillersMainCategoriesComponent;
  let fixture: ComponentFixture<BillersMainCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillersMainCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillersMainCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
