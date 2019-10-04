import { async, ComponentFixture, TestBed } from '@angular/core/testing';
const { percySnapshot } = require('@percy/protractor')

import { HeaderComponent } from './header.component';


describe('Integration test with visual testing', function() {
  it('Loads the app', function() {
    browser.get('http://localhost:4200')
    percySnapshot('My snapshot')
  })
})

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
