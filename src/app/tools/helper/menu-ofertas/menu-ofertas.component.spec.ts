import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfertasComponent } from './menu-ofertas.component';

describe('MenuOfertasComponent', () => {
  let component: MenuOfertasComponent;
  let fixture: ComponentFixture<MenuOfertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuOfertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
