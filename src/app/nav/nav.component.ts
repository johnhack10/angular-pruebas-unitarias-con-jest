import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

  navTo(path: string) {
    this.ngZone.run(() => { this.router.navigate([`/${path}`]); });
  }

}
