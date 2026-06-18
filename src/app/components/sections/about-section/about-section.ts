import { Component }
from '@angular/core';

import {
  ABOUT_CONTENT
}
from '../../../data/metal-defects/about.data';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  templateUrl: './about-section.html',
  styleUrl: './about-section.css'
})
export class AboutSection {

  readonly content =
    ABOUT_CONTENT;

}