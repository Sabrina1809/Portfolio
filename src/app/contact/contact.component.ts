import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [TranslateModule, CommonModule, FormsModule, RouterModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {
    http = inject(HttpClient);
    contactData = {
        name: "",
        email: "",
        message: "",
    }
    mailTest = true;
    checkboxChecked: boolean = false;
    showThankYou: boolean = false;
    post = {
        endPoint: 'https://deineDomain.de/sendMail.php',
        body: (payload: any) => JSON.stringify(payload),
        options: {
        headers: {
            'Content-Type': 'text/plain',
            responseType: 'text',
        },
        },
    };

    onSubmit(ngForm: NgForm) {
        if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
            this.http.post(this.post.endPoint, this.post.body(this.contactData))
            .subscribe({
                next: (response) => {
                    ngForm.resetForm();
                    console.log('Test');
                },
                error: (error) => {
                    console.error(error);
                },
                complete: () => console.info('send post complete'),
            });
        } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
            this.showThankYou = true;
            setTimeout(() => {
                this.showThankYou = false;
                this.checkboxChecked = false;
                ngForm.resetForm();
            }, 5000);
        }
    }

    toggleCheckbox() {
        this.checkboxChecked = !this.checkboxChecked;
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
