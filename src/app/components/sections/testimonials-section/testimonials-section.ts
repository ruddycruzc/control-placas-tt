import { Component }
from '@angular/core';

import {
  TestimonialCard
}
from '../../ui/cards/testimonial-card/testimonial-card';

import {
  TESTIMONIALS
}
from '../../../data/metal-defects/testimonials.data';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [
    TestimonialCard
  ],
  templateUrl: './testimonials-section.html',
  styleUrl: './testimonials-section.css'
})
export class TestimonialsSection {

  readonly testimonials =
    TESTIMONIALS;

}