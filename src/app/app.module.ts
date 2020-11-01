import {BrowserModule} from '@angular/platform-browser';
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
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { MenuHeaderComponent } from './components/menu-header/menu-header.component';
import {MatButtonModule} from '@angular/material/button';
import { MusicListComponent } from './components/music-list/music-list.component';

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
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxBootstrapIconsModule.pick(allIcons),
    MatDialogModule,
    MatOptionModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
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
    LanguagePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
