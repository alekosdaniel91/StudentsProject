import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDataComponent } from './components/table-data/table-data.component';
import { DataStudentsComponent } from './components/data-students/data-students.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'table', component: TableDataComponent },
  { path: '', component: DataStudentsComponent},
  { path: 'card', component: StudentCardComponent},
  { path: 'login', component: LoginComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
