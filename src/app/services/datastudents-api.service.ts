import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataStudentsApiService {

  
  constructor(private httpClient: HttpClient) {}
  
  getAllStudentsData() {
    const apiURL = 'http://localhost:3000/students/active';
    return this.httpClient.get(apiURL);
  }
  getAverageActive() {
    const apiURL = 'http://localhost:3000/students/active/average';
    return this.httpClient.get(apiURL);
  }
  getAverage() {
    const apiURL = 'http://localhost:3000/students/average';
    return this.httpClient.get(apiURL);
  }
}
