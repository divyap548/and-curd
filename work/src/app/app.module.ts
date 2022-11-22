import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';
import { SkillsComponent } from './routes/skills/skills.component';
import { CvComponent } from './routes/cv/cv.component';
import { PortfolioComponent } from './routes/portfolio/portfolio.component';
import { ReferenceComponent } from './routes/reference/reference.component';
import { ContactmeComponent } from './routes/contactme/contactme.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DemoComponent } from './demo/demo.component';

const myRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'cv', component: CvComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'contactme', component: ContactmeComponent },
  { path: '**', component: NotfoundComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    CvComponent,
    PortfolioComponent,
    ReferenceComponent,
    ContactmeComponent,
    NotfoundComponent,
    FooterComponent,
    HeaderComponent,
    DemoComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(myRoutes)],
  exports: [
     RouterModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
