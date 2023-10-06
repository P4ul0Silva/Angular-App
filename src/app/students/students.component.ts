import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../student.records';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students = STUDENTS;
  data = "Data";

  selectedStudentAge: number | undefined;
  onSelect(age: number): void {
    this.selectedStudentAge = age;
  }
  constructor() {

  }

  ngOnInit(): void {
    
  }
}
