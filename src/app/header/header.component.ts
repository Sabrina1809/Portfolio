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

export class HeaderComponent {
    currentLang: string = 'de';
    menuOpen: boolean = false;
    
    constructor(private translate: TranslateService) {
        this.translate.setDefaultLang('de');
        this.translate.use('de');
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLang = lang;
    }

    openMenu() {
        this.menuOpen = true;
    }

    closeMenu() {
        this.menuOpen = false;
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
