import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth$: Observable<boolean>;

  constructor(private authSvc: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authSvc.logout();
  }

}
