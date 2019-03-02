import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './Components/main-container/main-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatSelectModule,MatFormFieldModule,MatInputModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoginComponent } from './Components/Enter-Forms/login/login.component';
import { RegisterComponent } from './Components/Enter-Forms/register/register.component';
import { NavigationContainerComponent } from './Components/main-container/navigation-container/navigation-container.component';
import { MainContentComponent } from './Components/main-container/main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    LoginComponent,
    RegisterComponent,
    NavigationContainerComponent,
    MainContentComponent,
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
