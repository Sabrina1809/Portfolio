import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // <<< hinzufügen!
import { CommonModule } from '@angular/common'; // 👈 das hier



@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skills = [
    { name: 'Angular', icon: 'assets/img/skills/angular.png' },
    { name: 'Rest Api', icon: 'assets/img/skills/api.png' },
    { name: 'CSS', icon: 'assets/img/skills/css.png' },
    { name: 'Sass', icon: 'assets/img/skills/sass.png' },
    { name: 'Firebase', icon: 'assets/img/skills/firebase.png' },
    { name: 'Git', icon: 'assets/img/skills/git.png' },
    { name: 'HTML', icon: 'assets/img/skills/html.png' },
    { name: 'JavaScript', icon: 'assets/img/skills/javascript.png' },
    { name: 'Material Design', icon: 'assets/img/skills/material.png' },
    { name: 'Scrum', icon: 'assets/img/skills/scrum.png' },
    { name: 'TypeScript', icon: 'assets/img/skills/typescript.png' }
  ];

}
