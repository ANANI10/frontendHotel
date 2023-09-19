import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-diagramme',
  templateUrl: './diagramme.component.html',
  styleUrls: ['./diagramme.component.css']
})
export class DiagrammeComponent implements OnInit {
 

  chambres: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/chambres/').subscribe(data => {
      this.chambres.push(data);
      const labels = this.chambres.map(chambre => chambre.numero);
      const dataPoints = this.chambres.map(chambre => chambre.prix_unitaire);
      // Utilisez les données pour générer un graphique

    });
  }
}


