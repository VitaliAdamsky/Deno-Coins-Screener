import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  COIN_BLACK_LIST,
  COIN_PROVIDER,
  COIN_SORTER,
  COIN_REPO,
} from 'src/consts/url-consts';

import { CoinProviderComponent } from './coin-provider/coin-provider.component';
import { CoinBlackListComponent } from './coin-black-list/coin-black-list.component';
import { CoinSorterComponent } from './coin-sorter/coin-sorter.component';

import { CoinRepoComponent } from './coin-repo/coin-repo.component';

const routes: Routes = [
  { path: '', component: CoinRepoComponent },
  { path: COIN_BLACK_LIST, component: CoinBlackListComponent },
  { path: COIN_PROVIDER, component: CoinProviderComponent },
  { path: COIN_SORTER, component: CoinSorterComponent },
  { path: COIN_REPO, component: CoinRepoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
