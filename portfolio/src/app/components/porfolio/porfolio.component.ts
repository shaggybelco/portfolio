import { Component, OnInit } from '@angular/core';
import { ActiveRouteService } from 'src/app/services/active-route.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
})
export class PorfolioComponent implements OnInit {
  constructor(public route: ActiveRouteService) {

  }

  ngOnInit(): void {}
}
