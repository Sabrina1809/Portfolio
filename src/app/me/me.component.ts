import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core'; // <<< hinzufügen!

@Component({
  selector: 'app-me',
  standalone: true,
  imports: [TranslateModule], // <<< hier hinzufügen!
  templateUrl: './me.component.html',
  styleUrl: './me.component.scss'
})
export class MeComponent {}
