import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuOpened:boolean=true;
  menu=['Home','Feed','Messages','Notification']
  constructor(public iconRegistry:MatIconRegistry, public sanitizer:DomSanitizer ) { 
    this.iconRegistry.addSvgIcon("menu",this.sanitizer.bypassSecurityTrustResourceUrl("assets/images/menu.svg"));
  }

  ngOnInit() {
  }
  openCloseMenu(){
    this.menuOpened = !this.menuOpened;
  }
  navigate(){

  }
}
