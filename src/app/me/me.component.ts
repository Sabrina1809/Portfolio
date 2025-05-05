import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent implements OnInit {
  showContent = false;
  typedName = '';
  fullName = 'Sabrina Fritz';
  private typingInterval: any;

  ngOnInit(): void {
    this.showContent = true;
    this.startTypewriter();
  }

  startTypewriter(): void {
    this.typedName = '';
    let index = 0;

    clearInterval(this.typingInterval); // falls vorher einer lief
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
