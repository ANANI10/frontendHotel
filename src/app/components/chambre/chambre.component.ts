import { HttpResponse, HttpResponseBase } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChambreService } from 'src/app/service/chambre.service';
import { Chambre } from 'src/models/chambre.models';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';




@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css']
})
export class ChambreComponent implements OnInit{
  

  title !:'Chambre';
  titre :string = 'Chambre';
  listChambre : any[] = []; 
  filteredChambres : any  ;
  searchTerm!: number;
  currentPage = 1; // Page actuelle, initialisez-la à 1
  totalPages = 2; // Total des pages disponibles
  

  chambreForm: FormGroup; // Créez le formulaire FormGroup
  chambreData: any;

  constructor(private chambreService: ChambreService, private formBuilder: FormBuilder , private route: ActivatedRoute) {
    this.chambreForm = this.formBuilder.group({
      numero: ['', [Validators.required]],
      etat: ['', [Validators.required]],
      prix_unitaire: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.fetchAllChambre();
    this.fetchChambresPage(this.currentPage);
    const chambreId = this.route.snapshot.params['id'];
        this.chambreService.getChambreDetails(chambreId).subscribe((data) => {
            this.chambreData = data;
        });
  }

  imprimerDetailsChambre(): void {
    // Ajoutez ici le code pour imprimer les détails de la chambre.
    // Configuration du document PDF
    const documentDefinition: any = {
      content: [
          {
              text: `Chambre ${this.chambreData.numero}`,
              style: 'header',
          },
          {
              text: `État: ${this.chambreData.etat}`,
              margin: [0, 10],
          },
          {
              text: `Prix unitaire: ${this.chambreData.prix_unitaire}`,
              margin: [0, 10],
          },
      ],
      styles: {
          header: {
              fontSize: 18,
              bold: true,
          },
      },
  };

  //pdfMake.vfs = pdfFonts.pdfMake.vfs; // Imprimer le document PDF
  pdfMake.createPdf(documentDefinition).print();
  pdfMake.createPdf(documentDefinition).download('article.pdf');



  // Impression du document PDF dans une nouvelle fenêtre/onglet
  const pdfDocGenerator = pdfMake.createPdf(documentDefinition);

  // Génération du PDF et ouverture dans un nouvel onglet
  pdfDocGenerator.open();
}

  fetchAllChambre():void{
    this.chambreService.listChambre().subscribe({
      next:(response)=>{
        console.log(response);
        this.listChambre.push(response);
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddChambre():void{
    console.log('Méthode onAddChambre appelée');

    if (this.chambreForm.valid) {
      console.log('Formulaire Validé');
      console.log(this.chambreForm.valid);
      const chambreData = this.chambreForm.value;
      this.chambreService.addChambre(chambreData).subscribe(chambre =>
        this.listChambre.push(chambre)),
        this.chambreForm.reset();
    }else {
      console.log('Formulaire invalide');
    }
    
  }

  onDeleteChambre(id:number):void{
    console.log(id);
    this.chambreService.deleteChambre(id).subscribe({
      next:(response)=>{
        console.log(response);
        this.fetchAllChambre();
      },
      error(err){
        console.log('erreur de suppression' , err)
      },
    })
  }

  onUpdateChambre(id:number , chambre:Chambre):void{
    this.chambreService.updateChambre(id , chambre).subscribe({
      next:(response)=>{
        console.log(response);
      },
      error(err){
        console.log("erreur de mise à jours" , err);
      }
    })
  }

  searchChambres(): void {
    // Convertissez this.searchTerm en nombre (utilisation de parseFloat ou parseInt selon votre besoin)
    const searchTermNumber: number = this.searchTerm;
  
    // Assurez-vous que searchTermNumber est un nombre valide avant de filtrer
    if (!isNaN(searchTermNumber)) {
      this.filteredChambres = this.listChambre.filter((chambre: { numero: number; }) =>
        chambre.numero === searchTermNumber
      );
    } else {
      // Si searchTermNumber n'est pas un nombre valide, réinitialisez le filtre
      this.filteredChambres = this.listChambre;
    }
  }
  

  onDeleteChambreConfirmation(id: number): void {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir la supprimer ?");
    if (confirmation) {
      this.onDeleteChambre(id);
    }
  }


  fetchChambresPage(page: number): void {
    this.chambreService.getChambresPage(page).subscribe({
      next: (data: any) => {
        this.listChambre = data.results; // Stockez les données paginées
        this.totalPages = data.total_pages; // Mettez à jour le nombre total de pages
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      },
    });
  }

  onPageChange(newPage: number): void {
  if (newPage >= 1 && newPage <= this.totalPages) {
    this.fetchChambresPage(newPage);
  }
}

  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
 
}

