import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<void>();
  isSearch: boolean;
  searchText: string;

  constructor() { }

  filteredOptions: Observable<string[]>;

  ngOnInit() { }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onSearchActivate() {
    this.isSearch = true;
  }

  onSearch(f: NgForm) {
    if (f.valid) {
      console.log(f.value.searchText);
    }
  }

  onSearchExit() {
    this.isSearch = false;
    this.onSearchClear();
  }

  onSearchClear() {
    this.searchText = '';
  }

}
