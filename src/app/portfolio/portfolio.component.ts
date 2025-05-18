import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Represents a project in the portfolio.
 */
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

/**
 * Component responsible for displaying the portfolio of projects.
 */
@Component({
    selector: 'app-portfolio',
    standalone: true,
    imports: [CommonModule, TranslateModule],
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss'],
})

/**
 * Component that displays a portfolio of projects, each with a title, skills, images, and links to live versions and repositories.
 * It handles fading between images, detecting when projects are visible in the viewport, and initializing the project data.
 * The component also manages the dynamic display of project content as it enters the user's view.
 */
export class PortfolioComponent implements OnInit, AfterViewInit {
    @ViewChildren('projectElement', { read: ElementRef }) projectElements!: QueryList<ElementRef>;
    projects: Project[] = [
        {
            title: 'Join',
            skills: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
            images: [
                'assets/img/display-screenshot/good/join1.png',
                'assets/img/display-screenshot/good/join2.png',
                'assets/img/display-screenshot/good/join3.png',
                'assets/img/display-screenshot/good/join4.png'
            ],
            githubLink: 'https://github.com/Sabrina1809/Join',
            liveLink: 'https://sabrina-fritz.de/join/log_in.html',
            currentImageIndex: 0,
            key: "JOIN"
        },
        {
            title: 'El Pollo Loco',
            skills: ['HTML', 'CSS', 'JavaScript'],
            images: [
                'assets/img/display-screenshot/good/pollo1.png',
                'assets/img/display-screenshot/good/pollo2.png',
                'assets/img/display-screenshot/good/pollo3.png'
            ],
            githubLink: 'https://github.com/Sabrina1809/El-Pollo-Loco',
            liveLink: 'https://sabrina-fritz.de/elpolloloco/index.html',
            currentImageIndex: 0,
            key: "ELPOLLOLOCO"
        },
    ];

    /**
     * Initializes the component, sets initial states, and starts the image fade animation.
     */
    ngOnInit(): void {
        this.projects.forEach((project, i) => {
            project.isFading = false;
            project.visible = false; // neu
            setInterval(() => this.fadeToNextImage(i), 4000);
        });
    }

    /**
     * Initializes the intersection observer to detect visibility of projects.
     */
    ngAfterViewInit(): void {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.projects[+entry.target.getAttribute('data-index')!].visible = true;
                    }
                });
            },
            { threshold: 0.3 }
        );
        document.querySelectorAll('.project-ctn').forEach((el, index) => {
            el.setAttribute('data-index', index.toString());
            observer.observe(el);
        });
    }

    /**
     * Fades to the next image in the project’s image array.
     * @param index The index of the project to update.
     */
    fadeToNextImage(index: number): void {
        const project = this.projects[index];
        project.isFading = true;
        setTimeout(() => {
        project.currentImageIndex =
            (project.currentImageIndex + 1) % project.images.length;
        project.isFading = false;
        }, 500);
    }
}