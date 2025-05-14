import { Component, AfterViewInit, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

/**
 * Component that displays a list of skills with animations when they become visible in the viewport.
 * Implements `AfterViewInit` to manage the visibility and animation of skill elements.
 */
@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [TranslateModule, CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
/**
 * Component that manages and displays a list of skills, including their names and icons.
 * It utilizes an IntersectionObserver to animate the skills when they come into view with a staggered effect.
 * The skills are displayed with associated icons, and the animation is triggered when the elements intersect the viewport.
 * The component also handles transition delays for individual skill elements to create a smooth animation effect.
 */
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

    /**
     * Reference to the list of skill elements in the template for animation.
     */
    @ViewChildren('skillElement', { read: ElementRef })
    skillElements!: QueryList<ElementRef>;

    /**
     * Reference to the purple skill element in the template for animation.
     */
    @ViewChild('skillPurple', { static: true })
    skillPurple!: ElementRef;

    /**
     * Initializes the IntersectionObserver to animate skill elements when they come into view.
     * It also adds a transition delay to the elements for a staggered animation effect.
     */
    ngAfterViewInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => entry.isIntersecting && (entry.target.classList.add('animate-in'), observer.unobserve(entry.target)));
        }, { threshold: 0.1 });
        this.skillElements.forEach((skillEl, index) => {
            const el = skillEl.nativeElement;
            el.style.transitionDelay = `${index * 100}ms`;
            observer.observe(el);
        });
        this.skillPurple.nativeElement.style.transitionDelay = `${this.skills.length * 100}ms`;
        observer.observe(this.skillPurple.nativeElement);
    }
}