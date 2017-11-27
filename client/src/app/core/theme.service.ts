import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { environment } from '../../environments/environment'
import {map} from 'rxjs/operators';

@Injectable()
export class ThemeService {

  private currentThemeSubject = new BehaviorSubject(environment.theme.defaultTheme);
  currentTheme$: Observable<string> = this.currentThemeSubject.asObservable();
  currentThemeUrl$: Observable<string>;

  constructor() {
    this.currentThemeUrl$ = this.currentTheme$.pipe(map((newTheme) => 'https://bootswatch.com/4/' + newTheme + '/bootstrap.min.css'));
  }

  changeTheme(theme: string) {
    this.currentThemeSubject.next(theme.toLowerCase());
  }
}
