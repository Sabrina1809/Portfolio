import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    imports: [FooterComponent, RouterModule, TranslateModule, CommonModule],
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss'
})
/**
 * LegalNoticeComponent displays the legal notice page and provides a navigation function.
 */
export class LegalNoticeComponent {
    /**
     * Navigates back to the previous page in the browser history.
     */
    goBack(): void {
        window.history.back();
    }
}