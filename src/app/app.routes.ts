import { Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'; // Pfad anpassen
import { MainPageComponent } from './main-page/main-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';

// export const routes: Routes = [
//   { path: '', component: MainPageComponent },
//   { path: 'privacy-policy', component: PrivacyPolicyComponent },
//   { path: 'legal-notice', component: LegalNoticeComponent },
//   // andere Routen ggf. hier hinzufügen
// ];
export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  {
    path: 'legal-notice',
    loadComponent: () => import('./legal-notice/legal-notice.component').then(m => m.LegalNoticeComponent)
  }
];
