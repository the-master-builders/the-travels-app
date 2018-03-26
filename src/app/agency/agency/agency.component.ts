import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Agency } from '../../auth/agency.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { User } from '@firebase/auth-types';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.css']
})
export class AgencyComponent implements OnInit {
  agencyCollection: AngularFirestoreCollection<Agency>;
  agencyDoc: AngularFirestoreDocument<Agency>;
  agencyId: string;
  agencies: Observable<Agency[]>;
  agency: Observable<Agency>;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.authState.subscribe(state => {
      this.agencyId = state.uid;
      this.agencyDoc = this.afs.doc(`testAgencies/${this.agencyId}`);
      this.agency = this.agencyDoc.valueChanges();
      // this.agencyDoc.valueChanges().subscribe(agent => console.log(agent));
    });
  }

}
