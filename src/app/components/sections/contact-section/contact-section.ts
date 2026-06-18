import { Component }
from '@angular/core';

import {
  CONTACT_CONTENT
}
from '../../../data/metal-defects/contact.data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css'
})
export class ContactSection {

  readonly content =
    CONTACT_CONTENT;

}