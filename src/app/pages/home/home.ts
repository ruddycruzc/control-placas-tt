import { Component } from '@angular/core';
import { HeroSection } from "../../components/sections/hero-section/hero-section";
import { FeaturesSection } from "../../components/sections/features-section/features-section";

@Component({
  selector: 'app-home',
  imports: [HeroSection, FeaturesSection],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
