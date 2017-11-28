import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-customizer-box/theme-switcher/theme-switcher.component';
import { ThemeCustomizerBoxComponent } from './theme-customizer-box/theme-customizer-box.component';
import {ThemeService} from './theme.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ThemeSwitcherComponent,
    ThemeCustomizerBoxComponent,
    PageNotFoundComponent
  ],
  exports: [
    ThemeCustomizerBoxComponent
  ],
  providers: [
    ThemeService
  ]
})
export class CoreModule { }
