import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { DigitalWatchComponent } from './digital-watch/digital-watch.component';
import { MainAppComponent } from './main-app/main-app.component';

const routes: Routes = [
  { path: 'watch', component: DigitalWatchComponent},
  { path: 'home', component: MainAppComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'notfound', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { } 
