import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  // metadado que fornece DI a nivel de toda a aplicação
  // nao é preciso usar provider no modulo se preferir este
  providedIn: 'root'
})
export class SharedService {

  constructor() {}
  private data = new Subject<boolean>();

  setData(value: boolean) {
    // emite dados ao subject
    this.data.next(value);
  }

  getData() {
    // se inscreve no subject e recebe os dados emitidos
    return this.data.asObservable();
  }
  
}
