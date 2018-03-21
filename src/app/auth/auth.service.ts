import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthData } from './auth-data.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Agency } from './agency.model';
import * as fromRoot from '../app.reducer';
import * as Auth from './auth.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private store: Store<fromRoot.State>
  ) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(agent => {
      if (agent) {
        this.store.dispatch(new Auth.SetAuthenticated());
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
      }
    });
  }

  loginAgency(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
      response => {
        console.log('login successful');
        this.router.navigate(['agency', 'dashboard']);
      }
    ).catch(
      (error: Error) => {
        console.error(error.message);
      }
    );
  }

  registerAgent(authData: AuthData) {
    return this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password);
  }

  storeAgencyDetails(agency: Agency) {
    this.afs.collection<Agency>('testAgencies').add(agency).then(
      response => console.log('Agency Added.')
    ).catch(
      (error: Error) => console.error(error.message)
    );
  }

  logout() {
    this.afAuth.auth.signOut();
    this.store.dispatch(new Auth.SetUnauthenticated);
    this.router.navigate(['/']);
  }

}
