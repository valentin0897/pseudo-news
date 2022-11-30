import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsMenuComponent } from './admin-news-menu.component';

describe('AdminNewsMenuComponent', () => {
  let component: AdminNewsMenuComponent;
  let fixture: ComponentFixture<AdminNewsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
