import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingUserComponent } from './setting-user/setting-user.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { FollowProfileComponent } from './follow-profile/follow-profile.component';
import { CommentComponent } from './comment/comment.component';
import { OpenBlogComponent } from './open-blog/open-blog.component';
<<<<<<< Updated upstream
import { SearchTitleTagComponent } from './search-title-tag/search-title-tag.component';
=======
import { SearchComponent } from './search/search.component';
>>>>>>> Stashed changes

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    BlogAddComponent,
    BlogListComponent,
    UserProfileComponent,
    SettingUserComponent,
    BlogEditComponent,
    FollowProfileComponent,
    CommentComponent,
    OpenBlogComponent,
<<<<<<< Updated upstream
    SearchTitleTagComponent,
=======
    SearchComponent
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        // whitelistedDomains: ['localhost:3000'],
        // blacklistedRoutes: ['localhost:4000/api/auth']
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
