import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { SuccessComponent } from './success/success.component';
import { LessonComponent } from './lesson/lesson.component';

const routes: Routes = [
  { path: 'success', component: SuccessComponent },
  { path: '', component: LessonComponent, }
];

@NgModule({
  declarations: [],
  imports: [
    // aplica rotas para toda a aplicação
    RouterModule.forRoot(routes)
  ],
  // routerModule pode ser usado entre componentes
  exports: [RouterModule]
})
export class AppRoutingModule { }
