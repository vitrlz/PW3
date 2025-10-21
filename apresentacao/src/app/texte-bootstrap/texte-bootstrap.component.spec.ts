import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteBootstrapComponent } from './texte-bootstrap.component';

describe('TexteBootstrapComponent', () => {
  let component: TexteBootstrapComponent;
  let fixture: ComponentFixture<TexteBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexteBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TexteBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
