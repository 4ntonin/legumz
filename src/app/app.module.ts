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

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    AccueilComponent,
    ValeursComponent,
    AvisComponent,
    PartenairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AccueilComponent },
      { path: 'partenaires', component: PartenairesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
