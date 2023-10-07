import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'angular-app';
  theme = false;

  // DI (injecao de dependencia)
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.getData().subscribe(data => this.theme = data);
  }

}
