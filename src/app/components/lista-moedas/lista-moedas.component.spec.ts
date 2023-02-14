import { DataSource } from '@angular/cdk/collections';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MoedasService } from 'src/app/services/moedas.service';

import { ListaMoedasComponent } from './lista-moedas.component';

describe('ListaMoedasComponent', () => {
  let component: ListaMoedasComponent;
  let fixture: ComponentFixture<ListaMoedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
        MatListModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      providers:[{provide: MoedasService}],
      declarations: [ ListaMoedasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMoedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
