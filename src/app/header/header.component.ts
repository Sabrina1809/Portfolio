import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})

/**
 * HeaderComponent handles the website header, including language switching and menu control.
 */
export class HeaderComponent {
    currentLang: string = 'de';
    menuOpen: boolean = false;
    
    /**
     * Initializes the translate service and sets the default language to 'de'.
     * @param translate The TranslateService for language management
     */
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('de');
        this.translate.use('de');
    }

    /**
     * Switches the current language.
     * @param lang The language code to switch to
     */
    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLang = lang;
    }

    /**
     * Opens the menu.
     */
    openMenu() {
        this.menuOpen = true;
    }

    /**
     * Closes the menu.
     */
    closeMenu() {
        this.menuOpen = false;
    }

    /**
     * Smoothly scrolls the page to the top.
     */
    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}