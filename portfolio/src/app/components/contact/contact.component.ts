import { Component, OnInit } from '@angular/core';
import { ActiveRouteService } from 'src/app/services/active-route.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor(public route: ActiveRouteService) {

  }

  ngOnInit(): void {}
}
