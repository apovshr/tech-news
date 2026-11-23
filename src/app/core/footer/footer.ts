import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'tn-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  footerConfig: { year : number; title : string} = {
    year: 2026,
    title : "Tech News",
  }
}
