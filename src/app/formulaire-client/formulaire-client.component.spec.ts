import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireClientComponent } from './formulaire-client.component';

describe('FormulaireClientComponent', () => {
  let component: FormulaireClientComponent;
  let fixture: ComponentFixture<FormulaireClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireClientComponent]
    });
    fixture = TestBed.createComponent(FormulaireClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
