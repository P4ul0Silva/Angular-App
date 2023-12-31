import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { StudentService } from './student.service';
import { AppRoutingModule } from './app-routing.module';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    TestComponentComponent,
    ThemeButtonComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // DI ao escopo do Modulo
  // providers: [StudentService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
