import { Component, OnInit } from '@angular/core';
import { ActiveRouteService } from 'src/app/services/active-route.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public route: ActiveRouteService) {

  }

  ngOnInit(): void {}
}
