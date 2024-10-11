import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  add(x: number, y: number) {
    return x + y;
  }

  constructor() {
  }
}
