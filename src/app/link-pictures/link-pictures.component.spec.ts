import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkPicturesComponent } from './link-pictures.component';

describe('LinkPicturesComponent', () => {
  let component: LinkPicturesComponent;
  let fixture: ComponentFixture<LinkPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkPicturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
