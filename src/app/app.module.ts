import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoverComponent } from './features/cover/cover.component';
import { HomeComponent } from './features/home/home.component';
import { CreateRecipeComponent } from './features/create-recipe/create-recipe.component';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [AppComponent, CoverComponent, HomeComponent, CreateRecipeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    //   // Register the ServiceWorker as soon as the application is stable
    //   // or after 30 seconds (whichever comes first).
    //   registrationStrategy: 'registerWhenStable:30000',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
