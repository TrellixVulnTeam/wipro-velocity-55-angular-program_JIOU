import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudComponent } from './cloud/cloud.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';


// Define the routes - Represents a route configuration for the Router service.
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'cloud', component: CloudComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
