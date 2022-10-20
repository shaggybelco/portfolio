import { Component, OnInit } from '@angular/core';
import { ActiveRouteService } from 'src/app/services/active-route.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor(public route: ActiveRouteService) {
    
  }

  ngOnInit(): void {}
}
