import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Component that displays information about the application or developer.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}