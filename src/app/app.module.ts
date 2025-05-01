import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DescriptionModalComponent } from './shared/description-modal/description-modal.component';
import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { CarouselComponent } from './shared/carousel/carousel.component';

import { ValidationSummaryComponent } from './shared/validation-summary/validation-summary.component';

import { DeleteItemComponent } from './shared/delete-item/delete-item.component';
import { CoinProviderComponent } from './coin-provider/coin-provider.component';
import { CoinBlackListComponent } from './coin-black-list/coin-black-list.component';

import { CoinMenuComponent } from './nav-bar/coin-menu/coin-menu.component';

import { CoinSorterComponent } from './coin-sorter/coin-sorter.component';
import { TvListComponent } from './shared/tv-list/tv-list.component';
import { EditCoinComponent } from './shared/edit-coin/edit-coin.component';

import { CoinDescriptionComponent } from './shared/coin-description/coin-description.component';

import { CoinRepoComponent } from './coin-repo/coin-repo.component';
import { CoinTableComponent } from './shared/coin-table/coin-table.component';

@NgModule({
  declarations: [
    ValidationSummaryComponent,
    DescriptionModalComponent,
    CoinDescriptionComponent,
    CoinBlackListComponent,
    CoinProviderComponent,
    DeleteItemComponent,
    CoinSorterComponent,
    CoinTableComponent,
    SnackbarComponent,
    CarouselComponent,
    CoinMenuComponent,
    EditCoinComponent,
    CoinRepoComponent,
    SpinnerComponent,
    TvListComponent,
    NavBarComponent,
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
