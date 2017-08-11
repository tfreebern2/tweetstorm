import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MainPageComponent } from './main-page/main-page.component';

import { RouterModule, Routes } from '@angular/router';
import { TweetsService } from './tweets.service';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TweetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
