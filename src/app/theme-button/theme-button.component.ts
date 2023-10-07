import { Component, OnInit, Renderer2 } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.css']
})
export class ThemeButtonComponent implements OnInit{

  theme: boolean = false;

  constructor(private sharedService: SharedService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.sharedService.getData().subscribe(data => this.theme = data);
  }

  switchTheme() {
    this.sharedService.setData(!this.theme);
    this.renderer.setAttribute(document.documentElement, 'data-bs-theme', this.theme ? 'dark' : 'light');
  }


}
