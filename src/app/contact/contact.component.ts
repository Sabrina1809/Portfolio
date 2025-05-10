import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TranslateModule, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: "",
  }

  checkboxChecked: boolean = false;

  // Toggle für Checkbox
  toggleCheckbox() {
    this.checkboxChecked = !this.checkboxChecked;
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted)
    console.log(this.contactData)
  }
}
