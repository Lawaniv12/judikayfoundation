import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navToggle: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showNavToggle(){
    this.navToggle = !this.navToggle
  }
  
  closeNavToggle(){
    this.navToggle = false
  }
}
