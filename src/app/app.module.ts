import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './Component/side-bar/side-bar.component';
import { MainSectionComponent } from './Component/main-section/main-section.component';
import { RightSidebarComponent } from './Component/right-sidebar/right-sidebar.component';
import { FooterComponent } from './Component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    MainSectionComponent,
    RightSidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}