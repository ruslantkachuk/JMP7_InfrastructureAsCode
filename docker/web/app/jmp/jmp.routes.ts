import { Route } from '@angular/router';
import { MentorComponent } from './mentor/mentor.component';
import { ListComponent } from './list/list.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'mentor', component: MentorComponent },
    { path: 'mentor-list', component: ListComponent },
    { path: '', redirectTo: 'mentor', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    MentorComponent,
    ListComponent,
]
