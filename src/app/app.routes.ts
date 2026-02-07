import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Blog } from './components/blog/blog';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:"home",component:Home , title: 'Home'},
    {path:"blog",component:Blog , title: 'Blog'},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}

];
