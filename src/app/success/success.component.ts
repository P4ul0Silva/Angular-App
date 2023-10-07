import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

}
