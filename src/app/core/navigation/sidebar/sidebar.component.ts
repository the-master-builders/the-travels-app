import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../app.reducer';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  constructor(private router: Router, private authSvc: AuthService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.isAuth$ = this.store.select(fromRoot.getIsAuthenticated);
  }

  onSidenavClose() {
    this.sidenavClose.emit();
  }

  onLogout() {
    this.authSvc.logout();
    this.router.navigate(['/']);
    this.onSidenavClose();
  }

}
