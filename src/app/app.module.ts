import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { FactureComponent } from './components/facture/facture.component';
import { ClientComponent } from './components/client/client.component';
import { ReceptionisteComponent } from './components/receptioniste/receptioniste.component';
import { ManagerComponent } from './components/manager/manager.component';
import { ServiceHotelComponent } from './components/service-hotel/service-hotel.component';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { EditChambreComponent } from './components/edit-chambre/edit-chambre.component';
import { AddChambreComponent } from './components/add-chambre/add-chambre.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { DiagrammeComponent } from './components/diagramme/diagramme.component';
//import { AccessRoutingModule } from './access/access-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ChambreComponent,
    HotelComponent,
    FactureComponent,
    ClientComponent,
    ReceptionisteComponent,
    ManagerComponent,
    ServiceHotelComponent,
    AdministrateurComponent,
    ContactComponent,
    AboutUsComponent,
    LoginComponent,
    AddContactComponent,
    EditContactComponent,
    EditChambreComponent,
    AddChambreComponent,
    SidebarComponent,
    NavbarComponent,
    StatisticComponent,
    DiagrammeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    //AccessRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
