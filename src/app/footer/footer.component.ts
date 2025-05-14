import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LegalNoticeComponent } from '../legal-notice/legal-notice.component';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule, TranslateModule, LegalNoticeComponent],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})

/**
 * FooterComponent displays the website footer with links and scroll functionality.
 */
export class FooterComponent {
    /**
     * Smoothly scrolls the page to the top.
     */
    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}