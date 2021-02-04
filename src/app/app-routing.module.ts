import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard'
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogListComponent } from './blog-list/blog-list.component';
const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'home/register', component: RegisterComponent },
  { path: 'home/login', component: LoginComponent },
  { path: 'blog', component: BlogAddComponent },
  { path: 'blog/list', component: BlogListComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
