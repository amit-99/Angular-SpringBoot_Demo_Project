// src/app/contact-us/contact-us.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm: FormGroup;
  responseMessage: string | null = null;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.contactService.submitContactForm(this.contactForm.value)
        .subscribe({
          next: (response) => {
            this.responseMessage = response;
            this.contactForm.reset();
          },
          error: (error) => {
            this.responseMessage = 'An error occurred. Please try again later.';
            console.error('Error:', error);
          }
        });
    }
  }
}
