import { CoinsProviderService } from './../../service/coins/coins-provider.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { env } from 'src/environment/environment';

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
  isRotating = false;
  constructor(
    private router: Router,
    private coinsProviderService: CoinsProviderService
  ) {}

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

  onRunCoinsRefreshmentProcdure() {
    this.isRotating = true;
    this.coinsProviderService.runRefreshmentProcedure().subscribe(() => {
      this.isRotating = false;
    });
  }

  onGoToPriceLevelsWebsite() {
    window.open(env.priceLevelsWebsite, '_blank');
  }
}
