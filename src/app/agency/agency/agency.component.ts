import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Agency } from '../../auth/agency.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit, OnDestroy {
  agencyDoc: AngularFirestoreDocument<Agency>;
  agencyId: string;
  agency$: Observable<Agency>;
  agencySub: Subscription;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.agencySub = this.afAuth.authState.subscribe(state => {
      this.agencyId = state.uid;
      this.agencyDoc = this.afs.doc(`testAgencies/${this.agencyId}`);
      this.agency$ = this.agencyDoc.valueChanges();
      // this.agencyDoc.valueChanges().subscribe(agent => console.log(agent));
    });
  }

  ngOnDestroy() {
    this.agencySub.unsubscribe();
  }

}
