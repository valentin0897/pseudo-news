import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewsSettingsComponent } from './admin-news-settings.component';

describe('AdminNewsSettingsComponent', () => {
  let component: AdminNewsSettingsComponent;
  let fixture: ComponentFixture<AdminNewsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewsSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
