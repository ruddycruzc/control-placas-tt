import { Component } from '@angular/core';
import { AppButtonComponent } from '../../ui/buttons/app-button/app-button.component';  
import { CONTACT_CONTENT } from '../../../data/metal-defects/contact.data';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSection {
  readonly content = CONTACT_CONTENT;
}
