import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment'
import {ThemeService} from '../../theme.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ask-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {

  bootswatchThemes = environment.theme.bootswatchThemes;
  currentTheme$: Observable<string>;

  constructor(private themeService: ThemeService) {
    this.currentTheme$ = themeService.currentTheme$;
  }

  ngOnInit() {
  }

  selectTheme(theme: string) {
    this.themeService.changeTheme(theme);
  }
}
