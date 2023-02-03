import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConverterMoedaComponent } from './converter-moeda.component';

describe('ConverterMoedaComponent', () => {
  let component: ConverterMoedaComponent;
  let fixture: ComponentFixture<ConverterMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConverterMoedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConverterMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
