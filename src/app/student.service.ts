import { Injectable } from '@angular/core';
import { STUDENTS } from './student.records';
import { Student } from './student';

@Injectable()
export class StudentService {

  constructor() { }

  getStudents(): Student[] {
    return STUDENTS;
  }
}
