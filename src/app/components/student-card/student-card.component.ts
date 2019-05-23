import { Component, OnInit } from '@angular/core';
import { DataStudentsApiService } from '../../services/datastudents-api.service';
import { DataInterface } from '../../models/data-interface';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.sass']
})
export class StudentCardComponent implements OnInit {

  constructor(private dataApi: DataStudentsApiService) { }
  private data: DataInterface;
  public displayedColumns: string[] = ['ID', 'name', 'Club'];
  private  isTrue: boolean=true
  private ID: number=0
  panelOpenState = false;
  ngOnInit() {
    this.getData();
    this.getAverage();
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
    console.log('muesta',dat)
    return dat.replace('_'," ")
  }
  getAverage(): void {
    this.dataApi
    .getAllStudentsData()
    .subscribe((data: DataInterface) => {
      this.data = data
    });
    
  }
}
