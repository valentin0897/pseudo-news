import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsConstructorComponent } from './admin-news-constructor.component';

describe('AdminNewsConstructorComponent', () => {
  let component: AdminNewsConstructorComponent;
  let fixture: ComponentFixture<AdminNewsConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewsConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
