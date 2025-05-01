import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import {
  ADMIN,
  COIN_REPO,
  COIN_BLACK_LIST,
  COIN_PROVIDER,
  WORK,
  WS,
} from 'src/consts/url-consts';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private router: Router, private modelDialog: MatDialog) {}

  ngOnInit(): void {}

  onGoToCoin() {
    this.router.navigate([COIN_REPO]);
  }

  onGoToCoinProvider() {
    this.router.navigate([COIN_PROVIDER]);
  }

  onGoToCoinBlackList() {
    this.router.navigate([COIN_BLACK_LIST]);
  }
}
