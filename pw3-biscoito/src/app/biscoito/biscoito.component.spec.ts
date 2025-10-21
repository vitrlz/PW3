import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscoitoComponent } from './biscoito.component';

describe('BiscoitoComponent', () => {
  let component: BiscoitoComponent;
  let fixture: ComponentFixture<BiscoitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiscoitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiscoitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
