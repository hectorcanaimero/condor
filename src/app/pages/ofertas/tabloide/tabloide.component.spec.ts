import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabloideComponent } from './tabloide.component';

describe('TabloideComponent', () => {
  let component: TabloideComponent;
  let fixture: ComponentFixture<TabloideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabloideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabloideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
