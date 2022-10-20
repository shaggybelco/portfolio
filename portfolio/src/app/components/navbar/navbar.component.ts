import { Component, OnInit } from '@angular/core';
import { ActiveRouteService } from 'src/app/services/active-route.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public route: ActiveRouteService) {}

  ngOnInit(): void {
  
  }
}
