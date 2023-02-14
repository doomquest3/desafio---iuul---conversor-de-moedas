import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HistConversaoComponent } from '../hist-conversao/hist-conversao.component';
import { ListaMoedasComponent } from '../lista-moedas/lista-moedas.component';
import { PagPrincipalComponent } from '../pag-principal/pag-principal.component';
import { routes } from 'src/app/app-routing.module';
import { NavBarComponent } from './nav-bar.component';
import { Location } from '@angular/common';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let router: Router;
  let location: Location;
  beforeEach(async () => {
    await TestBed.configureTestingModule({

      imports:[
        MatIconModule,
        AppRoutingModule,
        HttpClientModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [ NavBarComponent,
                      ListaMoedasComponent,
                      HistConversaoComponent,
                      PagPrincipalComponent, ],


    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });


  it('Deve acessar rota', async(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      expect(location.path()).toEqual('/');
    })
  }))

});


