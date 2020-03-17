import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatInputModule,
  MatSliderModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDividerModule,
  MatChipsModule,
  MatSlideToggleModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCreatorComponent } from './components/user-creator/user-creator.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    UserCreatorComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatSliderModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
