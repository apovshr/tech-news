import { Component } from '@angular/core';
import {AppInfo} from '../../shared/models/appInfo';

@Component({
  imports: [],
  selector: 'tn-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  footerConfig: AppInfo = {
    year: new Date().getFullYear(),
    title : "Tech News",
  }
}
