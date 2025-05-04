import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { trigger, transition, style, animate } from '@angular/animations';


interface Project {
  title: string;
  skills: string[];
  images: string[];
  githubLink: string;
  liveLink: string;
  currentImageIndex: number;
  isFading?: boolean; // neu
  key: string;
  visible?: boolean; // 
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @ViewChildren('projectElement', { read: ElementRef }) projectElements!: QueryList<ElementRef>;
  projects: Project[] = [
    {
      title: 'Pokedex',
      skills: ['HTML', 'CSS', 'JavaScript', 'Rest Api'],
      images: [
        'assets/img/display-screenshot/pokedex-1-oH.png',
        'assets/img/display-screenshot/pokedex-2-oH.png',
        'assets/img/display-screenshot/pokedex-3-oH.png'
      ],
      githubLink: 'https://github.com/user/el-pollo-loco',
      liveLink: 'https://your-pollo-game.netlify.app',
      currentImageIndex: 0,
      key: "POKEDEX"
    },
    {
      title: 'Join',
      skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      images: [
        'assets/img/display-screenshot/join-1-oH.png',
        'assets/img/display-screenshot/join-2-oH.png',
        'assets/img/display-screenshot/join-3-oH.png',
        'assets/img/display-screenshot/join-4-oH.png'
      ],
      githubLink: 'https://github.com/user/join',
      liveLink: 'https://your-join-app.netlify.app',
      currentImageIndex: 0,
      key: "JOIN"
    },
    {
      title: 'El Pollo Loco',
      skills: ['HTML', 'CSS', 'JavaScript'],
      images: [
        'assets/img/display-screenshot/pollo-1-oH.png',
        'assets/img/display-screenshot/pollo-2-oH.png',
        'assets/img/display-screenshot/pollo-3-oH.png'
      ],
      githubLink: 'https://github.com/user/el-pollo-loco',
      liveLink: 'https://your-pollo-game.netlify.app',
      currentImageIndex: 0,
      key: "ELPOLLOLOCO"
    },
    {
      title: 'Portfolio',
      skills: ['HTML', 'SCSS', 'TypeScript', 'Angular', '♥'],
      images: [
        'assets/img/display-screenshot/portfolio1.png'
      ],
      githubLink: 'https://github.com/user/el-pollo-loco',
      liveLink: 'https://your-pollo-game.netlify.app',
      currentImageIndex: 0,
      key: "PORTFOLIO"
    },
  ];

  ngOnInit(): void {
    this.projects.forEach((project, i) => {
      project.isFading = false;
      project.visible = false; // neu
      setInterval(() => this.fadeToNextImage(i), 4000);
    });
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = +entry.target.getAttribute('data-index')!;
            this.projects[index].visible = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.project-ctn');
    elements.forEach((el, index) => {
      el.setAttribute('data-index', index.toString());
      observer.observe(el);
    });
  }


  fadeToNextImage(index: number): void {
    const project = this.projects[index];
  
    project.isFading = true;
  
    setTimeout(() => {
      project.currentImageIndex =
        (project.currentImageIndex + 1) % project.images.length;
      project.isFading = false;
    }, 500); // Dauer muss mit CSS-Transition übereinstimmen
  }
}
