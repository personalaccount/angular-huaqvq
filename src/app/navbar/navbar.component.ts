import { Component, OnInit } from '@angular/core';
import { Location, PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isCollapsed = true;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(public location: Location) {
  }

  ngOnInit() {
  }

  isHome() {
    const titlee = this.location.prepareExternalUrl(this.location.path());

    return titlee === '#/home';
  }

  isDocumentation() {
    const titlee = this.location.prepareExternalUrl(this.location.path());
    if ( titlee === '#/documentation' ) {
      return true;
    }
    else {
      return false;
    }
  }

}
