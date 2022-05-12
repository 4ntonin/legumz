import { Component, OnInit } from '@angular/core';

import { partenaires } from '../partenaires';

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.css']
})
export class PartenairesComponent implements OnInit {
  partenaires = partenaires;

  constructor() { }

  ngOnInit(): void {
  }

}
