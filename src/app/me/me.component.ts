import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-me',
    standalone: true,
    imports: [TranslateModule],
    templateUrl: './me.component.html',
    styleUrl: './me.component.scss'
})
/**
 * MeComponent displays the user's name with a typewriter effect.
 * It controls the visibility of content and starts the typewriter animation on initialization.
 */
export class MeComponent implements OnInit {
    showContent = false;
    typedName = '';
    fullName = 'Sabrina Fritz';
    private typingInterval: any;

    /**
     * Initializes the component and starts the typewriter effect.
     */
    ngOnInit(): void {
        this.showContent = true;
        this.startTypewriter();
    }

    /**
     * Starts the typewriter effect by typing the user's full name one letter at a time.
     */
    startTypewriter(): void {
        this.typedName = '';
        let index = 0;

        clearInterval(this.typingInterval);
        setTimeout(() => {
            this.typingInterval = setInterval(() => {
                if (index <= this.fullName.length) {
                this.typedName = this.fullName.slice(0, index);
                index++;
                } else {
                clearInterval(this.typingInterval);
                }
            }, 150);
        }, 2750)
    }
}