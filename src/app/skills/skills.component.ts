import { Component, AfterViewInit, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {

  skills = [
    { name: 'HTML', icon: 'assets/img/skills/html.png' },
    { name: 'CSS', icon: 'assets/img/skills/css.png' },
    { name: 'JavaScript', icon: 'assets/img/skills/javascript.png' },
    { name: 'Rest Api', icon: 'assets/img/skills/api.png' },
    { name: 'Firebase', icon: 'assets/img/skills/firebase.png' },
    { name: 'Angular', icon: 'assets/img/skills/angular.png' },
    { name: 'TypeScript', icon: 'assets/img/skills/typescript.png' },
    { name: 'Sass', icon: 'assets/img/skills/sass.png' },
    { name: 'Git', icon: 'assets/img/skills/git.png' },
    { name: 'Material Design', icon: 'assets/img/skills/material.png' },
    { name: 'Scrum', icon: 'assets/img/skills/scrum.png' }
  ];

  @ViewChildren('skillElement', { read: ElementRef })
  skillElements!: QueryList<ElementRef>;

  @ViewChild('skillPurple', { static: true })
  skillPurple!: ElementRef;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    this.skillElements.forEach((skillEl, index) => {
      const el = skillEl.nativeElement;
      el.style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    // .skill-purple erscheint nach allen anderen
    const purpleDelay = this.skills.length * 100; // z. B. bei 11 Skills → 1100ms
    const purpleEl = this.skillPurple.nativeElement;
    purpleEl.style.transitionDelay = `${purpleDelay}ms`;
    observer.observe(purpleEl);
  }
}


