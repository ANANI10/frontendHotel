import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatisticService } from 'src/app/service/statistic.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit{
  chambreCount!: number;

  constructor(private statisticService:StatisticService){}

  fetchAllStatistic():void{
    this.statisticService.getStatistic().subscribe({
      next:(response:any)=>{
        console.log(response);
        this.chambreCount = response.chambre_count;;
      },
      error(err){
        console.log("Erreur de chargement" , err);
      },
    })
  }

  ngOnInit(): void {
   this.fetchAllStatistic()
  }

}
