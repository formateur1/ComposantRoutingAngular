import { Component } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router:Router) {
  }

  news()
  {
    this.router.navigate(["news"]);
  }
}
