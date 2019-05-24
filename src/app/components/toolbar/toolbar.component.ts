import { Component, OnInit } from '@angular/core';
import { DataStudentsApiService } from '../../services/datastudents-api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent implements OnInit {
  private averageActive
  private average
  public isLogged = false;


  constructor(private dataApi: DataStudentsApiService, private authService:AuthService) { }

  ngOnInit() {
    this.getAverage()
    this.getAverageActive()
  }

  getAverage(): void {
    this.dataApi.getAverage()
      .subscribe((num: number) => this.average = num.toFixed(2));
  }

  getAverageActive(): void {
    this.dataApi.getAverageActive()
      .subscribe((num: number) => { this.averageActive = num.toFixed(2) });
  }
  getColor(num: number): string {
    if (num < 3) {
      console.log('entro', num);
      return 'red'
    }
    if (num > 3.9) {
      return 'green'
    }
    else {
      return 'yellow'
    }
  }

  onLogout(): void {
    this.authService.logoutUser();
    location.reload();
  }

}
