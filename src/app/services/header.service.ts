import { Injectable } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private colored = new BehaviorSubject<boolean>(false);
  currentColored = this.colored.asObservable();


  
  checkUpdateColored(scrollPosition: number, componentPosition: any) {
    if (scrollPosition >= componentPosition - 104) {
      this.colored.next(true);
    } else {
      this.colored.next(false);
    }
  }
}
