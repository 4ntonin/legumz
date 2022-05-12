import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ValeursComponent } from './valeurs/valeurs.component';
import { AvisComponent } from './avis/avis.component';
import { PartenairesComponent } from './partenaires/partenaires.component';
import { ProduitsComponent } from './produits/produits.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AccueilComponent,
    ValeursComponent,
    AvisComponent,
    PartenairesComponent,
    ProduitsComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AccueilComponent },
      { path: 'partenaires', component: PartenairesComponent },
      { path: 'produits', component: ProduitsComponent },
      { path: 'services', component: ServicesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
