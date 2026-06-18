import { Component } from '@angular/core';
import { HeroSection } from "../../components/sections/hero-section/hero-section";
import { FeaturesSection } from "../../components/sections/features-section/features-section";
import { AboutSection } from "../../components/sections/about-section/about-section";
import { TestimonialsSection } from "../../components/sections/testimonials-section/testimonials-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, FeaturesSection, AboutSection, TestimonialsSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
