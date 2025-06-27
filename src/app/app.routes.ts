import { Routes } from '@angular/router';
import { HeroPageComponent } from './components/hero/hero-page/hero-page.component';
import { ContadorComponent } from './components/counter/contador.component';
import { DragonballPageComponent } from './components/dragonball-page/dragonball-page.component';
import { DragonballPageSuperComponent } from './components/dragonball-page-super/dragonball-page-super.component';


export const routes: Routes = [
    {
        path:'hero',
        component: HeroPageComponent
    },
    
    {
        path:'contador',
        component:ContadorComponent
    },
    {
        path:'dragonball',
        component:DragonballPageComponent 
    },
    {
        path:'dragonballsuper',
        component:DragonballPageSuperComponent
    },

    {
        path:'**',
        redirectTo:'contador'
    },
    
];
