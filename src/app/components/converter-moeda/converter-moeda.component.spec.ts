import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MoedasService } from 'src/app/services/moedas.service';
import { RegConvertService } from 'src/app/services/reg-convert.service';

import { ConverterMoedaComponent } from './converter-moeda.component';

describe('ConverterMoedaComponent', () => {
  let component: ConverterMoedaComponent;
  let fixture: ComponentFixture<ConverterMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
          HttpClientModule,
          ReactiveFormsModule,
          MatFormFieldModule,

      ],
      providers:[
                {provide: MoedasService},
                {provide: RegConvertService},
                {provide: NG_VALUE_ACCESSOR, multi: true, useValue: {}}],
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
function forwardref(arg0: () => any) {
  throw new Error('Function not implemented.');
}

