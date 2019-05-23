import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataStudentsComponent } from './components/data-students/data-students.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule, MatExpansionModule, MatCardModule, MatGridListModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTableModule, MatDividerModule,} from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { StudentCardComponent } from './components/student-card/student-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DataStudentsComponent,
    ToolbarComponent,
    TableDataComponent,
    StudentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
