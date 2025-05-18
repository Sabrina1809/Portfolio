import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

/**
 * ContactComponent handles the contact form logic.
 * Sends user messages via HTTP and shows a thank-you message after submission.
 */
@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [TranslateModule, CommonModule, FormsModule, RouterModule],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})

/**
 * ContactComponent handles the contact form logic.
 * Sends user messages via HTTP and shows a thank-you message after submission.
 */
export class ContactComponent {
    /**
     * Injected HTTP client for sending form data.
     */
    http = inject(HttpClient);
    /**
     * Object holding the contact form input data.
     */
    contactData = {
        name: "",
        email: "",
        message: "",
    }
    mailTest = true;
    checkboxChecked: boolean = false;
    showThankYou: boolean = false;
    
    /**
     * Configuration for the HTTP POST request.
     */
    post = {
        endPoint: 'https://sabrina-fritz.de/sendMail.php',
        body: (payload: any) => JSON.stringify(payload),
        options: {
            headers: {
            'Content-Type': 'application/json',
            },
            responseType: 'json' as const,  // wichtig für TypeScript!
        },
    };

    /**
     * Sends contact form data if valid and displays a thank-you message.
     * Resets form and checkbox after 5 seconds.
     * @param ngForm The submitted contact form
     */
    onSubmit(ngForm: NgForm) {
        if (!ngForm.submitted || !ngForm.form.valid) return;
        this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
            next: () => {
                this.showThankYou = true;
                setTimeout(() => {
                    this.showThankYou = false;
                    this.checkboxChecked = false;
                    ngForm.resetForm();
                }, 5000);
            },
            error: (error) => console.error(error),
            complete: () => console.info('send post complete'),
        });
    }

    /**
     * Toggles the state of the checkbox.
     */
    toggleCheckbox() {
        this.checkboxChecked = !this.checkboxChecked;
    }

    /**
     * Smoothly scrolls the page to the top.
     */
    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    validateTrimmedName() {
        const trimmed = this.contactData.name?.trim();
        if (trimmed === '') {
            this.contactData.name = ''; // Setzt es leer zurück, damit `required` greift
        }
    }
}