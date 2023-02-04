import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistConversaoComponent } from './hist-conversao.component';

describe('HistConversaoComponent', () => {
  let component: HistConversaoComponent;
  let fixture: ComponentFixture<HistConversaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistConversaoComponent ]
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
