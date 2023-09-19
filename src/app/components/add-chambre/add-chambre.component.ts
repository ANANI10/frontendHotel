import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/service/chambre.service';
import { Chambre } from 'src/models/chambre.models';

@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.css']
})
export class AddChambreComponent implements OnInit {

  chambres : Chambre |any;
  chambreForm!: FormGroup;

  constructor(private chambreService:ChambreService , private fb: FormBuilder){
    this.chambreForm = this.fb.group({
      numero:['' , Validators.required],
      etat:['' , Validators.required],
      prix_unitaire:['' , Validators.required],
    })
  }

  ngOnInit(): void{
    this.fetchAllChambre
  }

  fetchAllChambre():void{
    this.chambreService.listChambre().subscribe({
      next:(response)=>{
        console.log(response);
        this.chambres = response;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  onAddChambre(chambreForm:NgForm):void{
    if (chambreForm.valid){
      return ;
    }
    console.log(chambreForm.valid);
    this.chambreService.addChambre(chambreForm.value).subscribe(chambre =>
      this.chambres.push(chambre)),
      chambreForm.reset();
  
  }
 
}




