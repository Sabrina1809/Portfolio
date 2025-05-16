import { Component } from '@angular/core';
import { MeComponent } from '../me/me.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MeComponent, AboutComponent, SkillsComponent, PortfolioComponent, ContactComponent, FooterComponent, HeroComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
/**
 * MainPageComponent serves as the main container for the website, displaying various sections like Me, About, Skills, Portfolio, Contact, and Footer.
 */
export class MainPageComponent {

}