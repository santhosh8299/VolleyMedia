import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  loginSubject = new Subject<boolean>();
  loginDetailsSubject = new Subject<any>();
  constructor() { }
}
