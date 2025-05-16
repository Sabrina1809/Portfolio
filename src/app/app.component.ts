import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MeComponent } from './me/me.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';

/**
 * The root component of the application.
 * It sets up the main layout, imports necessary child components, and manages language switching.
 * This component serves as the entry point of the app and contains the header, footer, and routing logic.
 */
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, MeComponent, TranslateModule, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, HeroComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

/**
 * The root component of the application that includes the main layout structure.
 * It imports necessary modules and components like the header, footer, skills, portfolio, etc.
 * The component also handles language switching functionality using the `ngx-translate` service.
 */
export class AppComponent {
    title = 'portfolio';

    /**
     * Initializes the `TranslateService` to manage language settings for the application.
     * Adds languages ('de', 'en') and sets the default language to 'de'.
     * @param translate The `TranslateService` instance for handling translations.
     */
    constructor(private translate: TranslateService) {
        translate.addLangs(['de', 'en']);
        translate.setDefaultLang('de');
    }

    /**
     * Switches the language of the application.
     * @param lang The language code to switch to ('de' or 'en').
     */
    switchLanguage(lang: string) {
        this.translate.use(lang);
    }
}