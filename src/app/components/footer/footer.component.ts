import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  items = [
    {
      name: 'Home',
      icon: 'assets/images/home.png'
    },
    {
      name: 'Feed',
      icon: 'assets/images/feed.jpeg'
    },
    {
      name: 'Messages',
      icon: 'assets/images/message.png'
    },{
      name: 'Notification',
      icon: 'assets/images/download.png'
    }];
  selectedItem = 'Home';
  constructor(public iconRegistry: MatIconRegistry, public sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIcon("menu", this.sanitizer.bypassSecurityTrustResourceUrl("assets/images/menu.svg"));
    this.iconRegistry.addSvgIcon("notification", this.sanitizer.bypassSecurityTrustResourceUrl("assets/images/download.png"));
  }

  ngOnInit() {
  }
  Select(item) {
    this.selectedItem = item.name;
  }
}
