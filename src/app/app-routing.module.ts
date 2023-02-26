import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverComponent } from './features/cover/cover.component';
import { CreateRecipeComponent } from './features/create-recipe/create-recipe.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  { path: '', component: CoverComponent },
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateRecipeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
