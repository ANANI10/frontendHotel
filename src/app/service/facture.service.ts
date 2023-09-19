import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Facture } from 'src/models/facture.models';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http:HttpClient) { }

  listFacture():Observable<Facture>{
    return this.http.get<Facture>(`${environment.backendhost}/list/`)
  }

  addFacture(facture:Facture):Observable<Facture>{
    return this.http.post<Facture>(`${environment.backendhost}/create/` , facture)
  }

  updateFacture(id:number , facture:Facture):Observable<Facture>{
    return this.http.put<Facture>(`${environment.backendhost}/${id}/update`, facture)
  }

  deleteFacture(id : number):Observable<Facture>{
    return this.http.delete<Facture>(`${environment.backendhost}/${id}/delete`)
  }
}
