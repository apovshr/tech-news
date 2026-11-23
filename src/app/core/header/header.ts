import { Component } from '@angular/core';
import {TopMenu} from './top-menu/top-menu';
import {AuthMenu} from './auth-menu/auth-menu';


@Component({
  imports: [
    TopMenu,
    AuthMenu],
  selector: 'tn-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  headerConfig = {
    title: "Tech News",
  }
}
