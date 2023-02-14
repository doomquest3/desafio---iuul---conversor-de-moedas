import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RegConvertService } from 'src/app/services/reg-convert.service';
import { MatListModule } from '@angular/material/list';
import { HistConversaoComponent } from './hist-conversao.component';
import { MatTableDataSource } from '@angular/material/table';

describe('HistConversaoComponent', () => {
  let component: HistConversaoComponent;
  let fixture: ComponentFixture<HistConversaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatListModule, MatTableDataSource],
      providers:[
                  {provide: RegConvertService},
                  {provide: MatDialog, useValue: {}}],
      declarations: [ HistConversaoComponent ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistConversaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
