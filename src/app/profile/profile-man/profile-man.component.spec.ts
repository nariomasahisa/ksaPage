import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileManComponent } from './profile-man.component';

describe('ProfileManComponent', () => {
  let component: ProfileManComponent;
  let fixture: ComponentFixture<ProfileManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
