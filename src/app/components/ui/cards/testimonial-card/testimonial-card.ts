import {
  Component,
  Input
}
from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-card.html',
  styleUrl: './testimonial-card.css'
})
export class TestimonialCard {

  @Input()
  quote = '';

  @Input()
  author = '';

}