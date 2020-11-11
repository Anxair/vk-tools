import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MainComponent} from './components/main/main.component';
import {routing} from './app.routing';
import {LoginComponent} from './components/login/login.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {allIcons, NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import {MatDialogModule} from '@angular/material/dialog';
import {MatOptionModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {LanguagePipe} from './pipes/language-pipe';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {MenuHeaderComponent} from './components/menu-header/menu-header.component';
import {MatButtonModule} from '@angular/material/button';
import {MusicListComponent} from './components/music-list/music-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {UserInfoPartPipe} from './pipes/user-info-part.pipe';
import {UserGeneralInfoComponent} from './components/user-info-part/user-general-info.component';
import {UserContactInfoComponent} from './components/user-info-part/user-contact-info.component';
import {UserEducationInfoComponent} from './components/user-info-part/user-education-info.component';
import {UserCareerInfoComponent} from './components/user-info-part/user-career-info.component';
import {UserLifePositionInfoComponent} from './components/user-info-part/user-life-position-info.component';
import {UserPrivateInfoComponent} from './components/user-info-part/user-private-info.component';
import {UserStatisticInfoComponent} from './components/user-info-part/user-statistic-info.component';
import {UserRelationPipe} from './pipes/user-relation.pipe';
import {
  CityNamePipe,
  CountryNamePipe, GenerateFieldForTranslatePipe, GroupNamePipe,
  JobInfoPipe, PersonalTransformPipe,
  ReversePipe,
  SchoolExtendedInfoPipe,
  UniversityExtendedInfoPipe
} from './pipes/utils.pipe';
import {PoliticalPipe} from './pipes/political.pipe';
import {AttitudePipe} from './pipes/attitude.pipe';
import {PeopleMainPipe} from './pipes/people-main.pipe.';
import {LifeMainPipe} from './pipes/life-main.pipe';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    LanguagePipe,
    MenuHeaderComponent,
    MusicListComponent,
    UserInfoPartPipe,
    UserGeneralInfoComponent,
    UserContactInfoComponent,
    UserEducationInfoComponent,
    UserCareerInfoComponent,
    UserLifePositionInfoComponent,
    UserPrivateInfoComponent,
    UserStatisticInfoComponent,
    UserRelationPipe,
    ReversePipe,
    CityNamePipe,
    CountryNamePipe,
    SchoolExtendedInfoPipe,
    UniversityExtendedInfoPipe,
    JobInfoPipe,
    GroupNamePipe,
    GenerateFieldForTranslatePipe,
    PoliticalPipe,
    PersonalTransformPipe,
    AttitudePipe,
    PeopleMainPipe,
    LifeMainPipe
  ],
  imports: [
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    MatDialogModule,
    MatOptionModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    CookieService,
    LanguagePipe,
    PoliticalPipe,
    TranslatePipe,
    AttitudePipe,
    PeopleMainPipe,
    LifeMainPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
