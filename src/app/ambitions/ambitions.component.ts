import { Component, OnInit } from '@angular/core';

import { ambitions } from '../ambitions';

@Component({
  selector: 'app-ambitions',
  templateUrl: './ambitions.component.html',
  styleUrls: ['./ambitions.component.css']
})
export class AmbitionsComponent implements OnInit {
  ambitions = ambitions;

  constructor() { }

  ngOnInit(): void {
  }

}
