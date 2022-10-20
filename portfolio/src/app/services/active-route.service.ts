import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActiveRouteService {

  constructor() { }
  home= 'active';
  about='';
  contact='';
  portfolio='';
  resume='';
}
