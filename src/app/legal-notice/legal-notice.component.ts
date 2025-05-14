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
export class LegalNoticeComponent {
    goBack(): void {
        window.history.back();
    }
}
