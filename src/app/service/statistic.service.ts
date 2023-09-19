import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Chambre } from 'src/models/chambre.models';

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(public http: HttpClient) { }

  getStatistic():Observable<Chambre>{
    return this.http.get<Chambre>(`${environment.backendhost}/statistic/`)
  }
}
