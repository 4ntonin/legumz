import { Component, OnInit } from '@angular/core';

import { produits } from '../produits';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits = produits;

  constructor() { }

  ngOnInit(): void {
  }

}
