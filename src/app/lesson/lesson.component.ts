import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { lesson } from '../student.records';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lesson = lesson;
  data = "Data";

  selectedStudentAge: number | undefined;
  selectedStudentName: string | undefined;

  onSelect(age: number, name: string): void {
    this.selectedStudentAge = age;
    this.selectedStudentName = name;
  }
  constructor() {

  }

  ngOnInit(): void {
    
  }
}
