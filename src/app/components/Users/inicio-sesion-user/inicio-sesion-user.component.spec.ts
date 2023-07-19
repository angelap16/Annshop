import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioSesionUserComponent } from './inicio-sesion-user.component';

describe('InicioSesionUserComponent', () => {
  let component: InicioSesionUserComponent;
  let fixture: ComponentFixture<InicioSesionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioSesionUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioSesionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
