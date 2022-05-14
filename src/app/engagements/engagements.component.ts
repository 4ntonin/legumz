import { Component, OnInit } from '@angular/core';

import { engagements } from '../engagements';


@Component({
  selector: 'app-engagements',
  templateUrl: './engagements.component.html',
  styleUrls: ['./engagements.component.css']
})
export class EngagementsComponent implements OnInit {
  engagements = engagements;

  constructor() { }

  ngOnInit(): void {
  }

}
