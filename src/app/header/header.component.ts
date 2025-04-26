import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core'; // <- TranslateModule importieren
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLang: string = 'de';  // Setzt Deutsch als Voreinstellung
  constructor(private translate: TranslateService) {
    // Standard-Sprache einstellen
    this.translate.setDefaultLang('de');
    this.translate.use('de');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;  // Speichert die aktuell gewählte Sprache
  }
}
