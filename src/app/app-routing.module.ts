import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChambreComponent } from './components/chambre/chambre.component';
import { ClientComponent } from './components/client/client.component';
import { FactureComponent } from './components/facture/facture.component';
import { AdministrateurComponent } from './components/administrateur/administrateur.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { LoginComponent } from './components/login/login.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegisterComponent } from './access/register/register.component';
import { EditChambreComponent } from './components/edit-chambre/edit-chambre.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { DiagrammeComponent } from './components/diagramme/diagramme.component';

const routes: Routes = [
  
  {path:'login' , component:LoginComponent},
  { path: 'admin', component: AdministrateurComponent, children: [
    {path:'facture' , component:FactureComponent},
    { path: 'chambres', component: ChambreComponent, children: [
      { path: 'add', component: AddContactComponent },
      { path: 'edit/:id', component: EditContactComponent }
    ]}
  ]},
  {path:'client' , component:ClientComponent},
  {path:'diagramme' , component:DiagrammeComponent},
  {path:'contact' , component:ContactComponent ,
   children:[
    {path:'add' , component:AddContactComponent },
    {path:'edit/:id' , component:EditContactComponent},
    
  ]},

  {path:'access' , loadChildren:()=>import('./access/access.module').then(opt=>opt.AccessModule)},
  {path:'login' , component:LoginComponent},
  {path:'about' , component:AboutUsComponent},
  {path:'register' , component:RegisterComponent},
  {path:'edit' , component:EditChambreComponent},
  {path:'statistic' , component:StatisticComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
