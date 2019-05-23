import { Component, OnInit } from '@angular/core';
import { DataStudentsApiService } from '../../services/datastudents-api.service';
import { DataInterface } from '../../models/data-interface';

@Component({
  selector: 'app-data-students',
  templateUrl: './data-students.component.html',
  styleUrls: ['./data-students.component.sass']
})
export class DataStudentsComponent implements OnInit {

  constructor(private dataApi: DataStudentsApiService) { }
  private data: DataInterface;
  public displayedColumns: string[] = ['ID', 'name', 'Club'];
  private  isTrue: boolean=true
  private ID: number=0
  panelOpenState = false;
  ngOnInit() {
    this.getData();
    this.getAverage();
    let v='Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Locker_Exit'
    console.log('Spawn_Locker_Hangout_Seat_LunchSpot_Seat_Locker_Exit',v.replace(/_/g,' '))
  }
  
  
  getData(): void {
    this.dataApi
      .getAllStudentsData()
      .subscribe((data: DataInterface) => this.data = data);
  }

  getGrades(i:number):void{
    console.log(this.data[i].grades,'numero' )
    this.isTrue=!this.isTrue
    this.ID=this.data[i].ID
  }
  getColor(num: number): string {
    if(num < 3){
    console.log('entro', num);
    return 'red'}
    if(num>3.9){
      return 'green'
    }
    else{
    return 'yellow'}
  }
  replace(dat: string): string {
    return dat.replace(/_/g,' ')
  }
  getAverage(): void {
    this.dataApi
    .getAllStudentsData()
    .subscribe((data: DataInterface) => {
      this.data = data
    });
    
  }
}
