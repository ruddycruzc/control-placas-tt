import { Component } from '@angular/core';
import { HERO_CONTENT } from '../../../data/metal-defects/hero.data';
@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  readonly hero =
  HERO_CONTENT;
}
