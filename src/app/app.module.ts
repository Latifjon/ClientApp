import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComonentsComponent } from './src/app/comonents/comonents.component';
import { ComponentsComponent } from './src/app/components/components.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { MainHeaderComponent } from './Components/main-container/main-header/main-header.component';
import { MainSidebarComponent } from './Components/main-container/main-sidebar/main-sidebar.component';
import { MainContentComponent } from './Components/main-container/main-content/main-content.component';
import { FooterComponent } from './Components/main-container/footer/footer.component';
import { EnterFormComponent } from './Components/enter-form/enter-form.component';
import { EnterFormsComponent } from './Components/enter-forms/enter-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    ComonentsComponent,
    ComponentsComponent,
    MainContainerComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainContentComponent,
    FooterComponent,
    EnterFormComponent,
    EnterFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
