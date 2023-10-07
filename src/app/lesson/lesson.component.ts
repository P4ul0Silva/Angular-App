import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  students : Student[] | undefined;
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
    this.getStudents();
  }

  getStudents(): void {
    let obj = new StudentService();
    this.students = obj.getStudents();
  }

}
