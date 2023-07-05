import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router:Router, private ar:ActivatedRoute) {
    console.log("url : " + ar.snapshot)
  }

  news()
  {
    this.router.navigate(["news"]);
  }
}
