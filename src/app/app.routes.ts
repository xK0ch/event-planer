import {Routes} from '@angular/router';
import {InstructorOverviewComponent} from './pages/instructor-overview/instructor-overview.component';

export const INSTRUCTOR_OVERVIEW_SLUG = 'instructor-overview';

export const routes: Routes = [
  {
    path: '',
    redirectTo: INSTRUCTOR_OVERVIEW_SLUG,
    pathMatch: 'full',
  },
  {
    path: INSTRUCTOR_OVERVIEW_SLUG,
    component: InstructorOverviewComponent,
  },
];
