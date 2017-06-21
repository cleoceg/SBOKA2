import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }        from './app.component';
import { HeaderComponent } from './core/header.component';
import { FooterComponent } from './core/footer.component';
import { HomeComponent } from './core/home.component';
import { RiskModule } from './risks/risk.module';
import { PrinModule } from './principles/prin.module';
import { PhsModule } from './phase/phs.module';
import { OrganModule } from './organ/organ.module';
import { JustifModule } from './justif/justif.module';
import { QualityModule } from './quality/quality.module';
import { ChangeModule } from './change/change.module';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    RiskModule,
    PrinModule,
    HttpModule,
    JsonpModule,
    PhsModule,
    OrganModule,
    JustifModule,
    QualityModule,
    ChangeModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

