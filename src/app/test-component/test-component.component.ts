import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit{

  @Input() studentAge: number | undefined;
  @Input() studentName: string | undefined;

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
