import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.menuItems = [
      {displayName: "Home", url: "/products"},
      {displayName: "Account", url: "/account"},
      {displayName: "Pages", url: "/pages"},
      {displayName: "Computers", url: "/products/computers"},
      {displayName: "Contact", url: "/contact"}
    ]
  }

  ngOnInit() {
  }

}
