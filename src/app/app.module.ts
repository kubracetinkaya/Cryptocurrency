import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';


import { availableTheme } from './app.constant';


import { CryptocurrencyApp } from './app.component';


import { ImageHelper } from '../helper/image.helper';
import { PriceHelper } from '../helper/price.helper';


import { Api, CoinProvider, SettingsProvider } from '../providers/providers';


import { ComponentsModule } from '../components/components.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  return new SettingsProvider(storage, {
    theme: availableTheme.Light,
    currency: {
      code: 'usd',
      name: 'Dollar',
      symbol: '$'
    },
    language: {
      code: 'en',
      name: 'English'
    }
  });
}

@NgModule({
  declarations: [CryptocurrencyApp],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(CryptocurrencyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [CryptocurrencyApp],
  providers: [
    Api,
    CoinProvider,
    SplashScreen,
    StatusBar,
    ImageHelper,
    PriceHelper,
    { provide: SettingsProvider, useFactory: provideSettings, deps: [Storage] },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
