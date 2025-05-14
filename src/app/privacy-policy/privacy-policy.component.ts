import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from '../footer/footer.component';

/**
 * Component that displays the privacy policy of the website. It includes functionality to navigate back to the previous page.
 */
@Component({
    selector: 'app-privacy-policy',
    standalone: true,
    imports: [TranslateModule, CommonModule, FooterComponent],
    templateUrl: './privacy-policy.component.html',
    styleUrl: './privacy-policy.component.scss'
})

/**
 * Handles the logic for the privacy policy page.
 * Provides a method to navigate back to the previous page in the browser history.
 */
export class PrivacyPolicyComponent {
    /**
     * Navigates the user to the previous page in the browser history.
     */
    goBack(): void {
        window.history.back();
    }
}