import { HttpClientModule,HttpClient} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ApiComponent } from './api/api.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { FormsModule } from '@angular/forms';
import { VoidButtonComponent } from './void-button/void-button.component';
import { HomeComponent } from './home/home.component';
import { AngularFireModule } from '@angular/fire/compat';
import { FirebaseService } from './shared/services/auth.service';
import { HighlightDirective } from './directive/highlight.directive';
import { ChildComponent } from './child/child.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    EmployeeDashboardComponent,
    LoginComponent,
    SignupComponent,
    ApiComponent,
    AgGridComponent,
    VoidButtonComponent,
    HomeComponent,
    HighlightDirective,
    ChildComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    Ng2SearchPipeModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDBet9zeOtFHy3LGUzxjPz3Kz6RJSXipuo",
      authDomain: "angular-firebase-15b31.firebaseapp.com",
      projectId: "angular-firebase-15b31",
      storageBucket: "angular-firebase-15b31.appspot.com",
      messagingSenderId: "919284499358",
      appId: "1:919284499358:web:02c166312b170b14ee8c8f",
      measurementId: "G-D6C61BDEC3"
    }),
    AgGridModule.withComponents([]),



  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
