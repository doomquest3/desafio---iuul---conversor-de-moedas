import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RegConvertService } from './reg-convert.service';

describe('RegConvertService', () => {
  let service: RegConvertService;
  const listItem: any[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[RegConvertService]
    });
    service = TestBed.inject(RegConvertService);

    const mockLocalStorage = {
      setItem:(key: number, value: string) =>{
        listItem[key] = value;
      },
      getItem:(key: number): string=>{
        return key in listItem ? listItem[key] : null;
      },
      removeItem: (key: number)=>{
        delete listItem[key];
      }
    }

    //spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem(1,'leandro'));
    //spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    //spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);

  });


  it('Deve inserir um item no localstorage.', ()=>{

  })

});
