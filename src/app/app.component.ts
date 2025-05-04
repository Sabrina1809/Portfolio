import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MeComponent } from './me/me.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, MeComponent, TranslateModule, AboutComponent, SkillsComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
   // NEU:
   constructor(private translate: TranslateService) {
    translate.addLangs(['de', 'en']);   // verfügbare Sprachen
    translate.setDefaultLang('de');     // Standardsprache
  }

  // NEU:
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
