import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthData } from './auth-data.model';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Agency } from './agency.model';

@Injectable()
export class AuthService {
  isAuth = false;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(agent => {
      if (agent) {
        this.isAuth = true;
      } else {
        this.isAuth = false;
      }
    });
  }

  loginAgent(authData: AuthData) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password).then(
      response => {
        console.log('login scuccessful');
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

}
