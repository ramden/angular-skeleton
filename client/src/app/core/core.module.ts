import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from './theme-customizer-box/theme-switcher/theme-switcher.component';
import { ThemeCustomizerBoxComponent } from './theme-customizer-box/theme-customizer-box.component';
import {ThemeService} from './theme.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThemeSwitcherComponent,
    ThemeCustomizerBoxComponent
  ],
  exports: [
    ThemeCustomizerBoxComponent
  ],
  providers: [
    ThemeService
  ]
})
export class CoreModule { }
