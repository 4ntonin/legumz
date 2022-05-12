import { Component, OnInit } from '@angular/core';

import { avis } from '../avis';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
  avis = avis;

  constructor() { }

  ngOnInit(): void {
  }

}
