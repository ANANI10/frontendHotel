import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/service/chambre.service';
import { Chambre } from 'src/models/chambre.models';

@Component({
  selector: 'app-edit-chambre',
  templateUrl: './edit-chambre.component.html',
  styleUrls: ['./edit-chambre.component.css']
})
export class EditChambreComponent implements OnInit {
  
  chambreForm!: FormGroup ;
 

  constructor(private formBuilder: FormBuilder, private chambreService: ChambreService) { }

  ngOnInit():void{
    this.initChambreForm();
  }

  initChambreForm(){
    this.chambreForm = this.formBuilder.group({
      id: ['', Validators.required],
      numero: ['', Validators.required],
      etat: ['', Validators.required],
      prix_unitaire: ['', Validators.required],
      
      // Autres champs de formulaire ici
    });
  }

  onSubmit(){
    if (this.chambreForm.valid) {
      const chambreData: Chambre = this.chambreForm.value;

      this.chambreService.updateChambre(chambreData.id, chambreData).subscribe({
        next: (response) => {
          console.log('Chambre mise à jour:', response);
        },
        error: (err) => {
          console.log('Erreur de mise à jour:', err);
        }
      });
    }
  }

}
