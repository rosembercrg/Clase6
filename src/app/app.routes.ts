import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { TestHub } from './pages/test-hub/test-hub';
import { ReadingTest } from './pages/reading-test/reading-test';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: Home },
  { path: 'niveles', component: TestHub },
  { path: 'test/:level', component: ReadingTest },
  { path: 'contacto', component: Contact },
  { path: '**', redirectTo: 'inicio' }
];

