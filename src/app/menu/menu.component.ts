import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SessionService } from '../session.service';

class MenuItem {
  displayName: string;
  url: string
}

@Component({
  selector: 'nav.app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems: Array<MenuItem>;
  activeItem: string = "Menu";

  constructor(private route: Router, public sessionSvc: SessionService) {
    this.menuItems = [
      { displayName: "Home", url: "/products" },
      { displayName: "Account", url: "/account" },
      { displayName: "Pages", url: "/pages" },
      { displayName: "Computers", url: "/products/computers" },
      { displayName: "Contact", url: "/contact" }
    ];
  }

  ngOnInit() {
    
    this.route.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        let findResult = this.menuItems.find(m => m.url === e.url)
        this.activeItem = findResult ? findResult.displayName : "Menu";
      }
    });
  }
}
