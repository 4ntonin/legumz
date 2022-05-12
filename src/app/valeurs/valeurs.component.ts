import { Component, OnInit } from '@angular/core';

import { valeurs } from '../valeurs';

@Component({
  selector: 'app-valeurs',
  templateUrl: './valeurs.component.html',
  styleUrls: ['./valeurs.component.css']
})
export class ValeursComponent implements OnInit {
  valeurs = valeurs;

  constructor() { }

  ngOnInit(): void {
  }

}
