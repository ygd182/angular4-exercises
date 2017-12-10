import { Routes, RouterModule } from '@angular/router';
import { ActivateGuard } from './app.activate.guard';
import { LoginComponent } from './login/login.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistListComponent } from './artist-list/artist-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'  },
  { path: 'login', component: LoginComponent },
  { path: 'artist-list', component: ArtistListComponent, canActivate: [ActivateGuard] },
  { path: 'artist-detail/:name', component: ArtistDetailComponent, canActivate: [ActivateGuard] }
];


export const Routing = RouterModule.forRoot(routes);