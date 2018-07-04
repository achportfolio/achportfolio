import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import {Navigation} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";


import {HomeComponent} from "./pages/home/home.component";
import {ProposalComponent} from "./pages/proposal/proposal.component";
import {ResumeComponent} from "./pages/resume/resume.component";
import {ExamplesComponent} from "./pages/examples/examples.component";
import {DesignsComponent} from "./pages/designs/designs.component";


@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    ProposalComponent,
    ResumeComponent,
    ExamplesComponent,
    DesignsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }