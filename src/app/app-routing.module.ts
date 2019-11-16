
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './services/guards/login.guard';


const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuard ],
        loadChildren: './pages/pages.module#PagesModule'
    },
    {
        path: '**',
        component: NopagefoundComponent
    }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
