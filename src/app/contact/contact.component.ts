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
    nameValid: boolean | null = null;
    emailValid: boolean | null = null;
    messageValid: boolean | null = null;
    
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

    /**
     * Checks if the name is non-empty after trimming whitespace.
     */
    validateName() {
        const trimmed = this.contactData.name?.trim();
        this.nameValid = !!trimmed;
    }

    /**
     * Validates the email format after trimming whitespace.
     */
    validateEmail() {
        const email = this.contactData.email?.trim();
        const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
        this.emailValid = emailRegex.test(email);
    }

    /**
     * Checks if the message has at least 10 non-whitespace characters.
     */
    validateMessage() {
        const trimmed = this.contactData.message?.trim();
        this.messageValid = trimmed?.length >= 10;
    }
}