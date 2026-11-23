import { Component } from '@angular/core';
import {TopMenu} from './top-menu/top-menu';
import {AuthMenu} from './auth-menu/auth-menu';
import {AppInfo} from '../../shared/models/appInfo';


@Component({
  imports: [
    TopMenu,
    AuthMenu],
  selector: 'tn-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  headerConfig:  AppInfo = {
    title: "Tech News",
    year: new Date().getFullYear(),
  };
}
