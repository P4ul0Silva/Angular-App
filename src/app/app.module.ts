import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LessonComponent } from './lesson/lesson.component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
