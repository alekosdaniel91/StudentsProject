import { Component, OnInit } from '@angular/core';
import { DataStudentsApiService } from '../../services/datastudents-api.service';
import { DataInterface } from '../../models/data-interface';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.sass']
})
export class TableDataComponent implements OnInit {

  constructor(private dataApi: DataStudentsApiService) { }
  private dataSource: DataInterface;

  ngOnInit() {
    this.getData()
  }

  getData(): void {
    this.dataApi
      .getAllStudentsData()
      .subscribe((data: DataInterface) => {
        this.dataSource = data;
        console.log(this.dataSource);
      });
      
      
  }
  public displayedColumns: string[] = ['ID', 'name', 'Club'];
  
}
