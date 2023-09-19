import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Chambre } from 'src/models/chambre.models';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {

  constructor(public http: HttpClient) { }

  listChambre():Observable<Chambre>{
    return this.http.get<Chambre>(`${environment.backendhost}/list/`)
  }

  addChambre(chambre:Chambre):Observable<Chambre>{
    return this.http.post<Chambre>(`${environment.backendhost}/create/` , chambre)
  }

  updateChambre(id:number , chambre:Chambre):Observable<Chambre>{
    return this.http.put<Chambre>(`${environment.backendhost}/${id}/update`, chambre)
  }

  deleteChambre(id : number):Observable<Chambre>{
    return this.http.delete<Chambre>(`${environment.backendhost}/${id}/delete`)
  
  }

  
  id = 25;
  getChambreDetails(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${environment.backendhost}/${25}/imprimer`) 
  }

  getChambresPage(page: number): Observable<any> {
    // Vous pouvez passer le numéro de page à votre API Django pour récupérer les données de cette page
    return this.http.get<any>(`${environment.backendhost}/list?page=${2}`);
  }
  
}





