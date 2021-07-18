import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthConfigModule } from './auth/auth-config.module';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { DeviceCardComponent } from './shared/device-card/device-card.component';
import { DeviceDetailsComponent } from './pages/device-details/device-details.component';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';
import { DeviceIconComponent } from './shared/device-icon/device-icon.component';
import { ValueRowComponent } from './shared/value-row/value-row.component';
import { EntityCardComponent } from './shared/entity-card/entity-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    UserProfileComponent,
    DeviceListComponent,
    DeviceCardComponent,
    DeviceDetailsComponent,
    SectionHeaderComponent,
    DeviceIconComponent,
    ValueRowComponent,
    EntityCardComponent,
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AuthConfigModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
