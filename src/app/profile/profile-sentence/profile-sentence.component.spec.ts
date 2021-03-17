import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSentenceComponent } from './profile-sentence.component';

describe('ProfileSentenceComponent', () => {
  let component: ProfileSentenceComponent;
  let fixture: ComponentFixture<ProfileSentenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSentenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
