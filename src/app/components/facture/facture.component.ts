import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FactureService } from 'src/app/service/facture.service';
import { Facture } from 'src/models/facture.models';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  title !:'Facture'; 
  titre :string = 'Facture';
  listFacture : any ;
  filteredFactures : any ;
  searchTerm: string = '';
  

  constructor(private factureService : FactureService){}

  ngOnInit(): void {
    this.fetchAllFacture();
  }

  fetchAllFacture(){
    this.factureService.listFacture().subscribe({
      next:(response)=>{
        console.log(response);
        this.listFacture = response;
      },
      error(err: any){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddFacture(factureForm:NgForm){
    if (factureForm.valid){
      return ;
    }
    console.log(factureForm.valid);
    this.factureService.addFacture(factureForm.value).subscribe((facture: any) =>
      this.listFacture.push(facture)),
      factureForm.reset();
  
  }

  onDeleteFacture(id:number){
    console.log(id);
    this.factureService.deleteFacture(id).subscribe({
      next:(response: any)=>{
        console.log(response);
        this.fetchAllFacture();
      },
      error(err: any){
        console.log('erreur de suppression' , err)
      },
    })
  }

  onUpdateFacture(id:number , facture:Facture){
    this.factureService.updateFacture(id , facture).subscribe({
      next:(response: any)=>{
        console.log(response);
      },
      error(err: any){
        console.log("erreur de mise à jours" , err);
      }
    })
  }

  searchFacture(): void {
    this.filteredFactures = this.listFacture.filter((facture: { numero: string | string[]; }) =>
      facture.numero.includes(this.searchTerm)
    );
  }

  onDeleteFactureConfirmation(id: number): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir la supprimer ?");
    if (confirmation) {
      this.onDeleteFacture(id);
    }
  }

}
