import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MainComponent} from './components/main/main.component';
import {LoginComponent} from './components/login/login.component';
import {MusicListComponent} from './components/music-list/music-list.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'auth', component: LoginComponent},
  {path: 'music', component: MusicListComponent}
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
