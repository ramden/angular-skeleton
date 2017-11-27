import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCustomizerBoxComponent } from './theme-customizer-box.component';

describe('ThemeCustomizerBoxComponent', () => {
  let component: ThemeCustomizerBoxComponent;
  let fixture: ComponentFixture<ThemeCustomizerBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeCustomizerBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeCustomizerBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
