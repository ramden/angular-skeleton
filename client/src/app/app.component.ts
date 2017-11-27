import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {ThemeService} from './core/theme.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'ask-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sanitizer: DomSanitizer;
  currentThemeUrl$: Observable<string>;

  constructor(private domSanitizer: DomSanitizer, private themeService: ThemeService) {
    this.sanitizer = domSanitizer;
    this.currentThemeUrl$ = themeService.currentThemeUrl$;
  }
}
