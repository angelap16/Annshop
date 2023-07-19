import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAnnsComponent } from './about-anns.component';

describe('AboutAnnsComponent', () => {
  let component: AboutAnnsComponent;
  let fixture: ComponentFixture<AboutAnnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutAnnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutAnnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
