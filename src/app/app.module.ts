import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataStudentsComponent } from './components/data-students/data-students.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";
import { MatListModule, MatExpansionModule, MatCardModule, 
          MatGridListModule, MatButtonModule, MatToolbarModule, MatIconModule, 
          MatMenuModule, MatTableModule, MatDividerModule, MatInputModule,
          MatProgressSpinnerModule } from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TableDataComponent } from './components/table-data/table-data.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    DataStudentsComponent,
    ToolbarComponent,
    TableDataComponent,
    StudentCardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
