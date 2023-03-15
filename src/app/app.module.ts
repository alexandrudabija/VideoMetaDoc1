import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './pages/index/index.component';
import { UserComponent } from './pages/user/user.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { TestComponent } from './components/test/test.component'
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutUsComponent } from './components/aboutUs/aboutUs.component';
import { ProductsComponent } from './components/products/products.component';
import {SwiperModule } from 'swiper/angular';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PictureSectionComponent } from './components/picture-section/picture-section.component';
import { OurServices } from './components/ourServices/ourServices.component';
import { AuthorizationDocumentComponent } from './components/authorization-document/authorization-document.component';
import { LocationComponent } from './components/location/location.component';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { Gallery2Component } from './components/gallery2/gallery2.component';
import { CallComponent } from './components/call/call.component';
import { HeaderComponent } from './components/header/header.component';
import { RequestCallComponent } from './components/request-call/request-call.component'
import { CountUpModule } from 'ngx-countup';
import { PhoneComponent } from './components/phone/phone.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    UserComponent,
    CartComponent,
    CheckoutComponent,
    TestComponent,
    GalleryComponent,
    AboutUsComponent,
    ProductsComponent,
    StatisticsComponent,
    PictureSectionComponent,
    OurServices,
    AuthorizationDocumentComponent,
    LocationComponent,
    FooterComponent,
    Gallery2Component,
    CallComponent,
    HeaderComponent,
    RequestCallComponent,
    PhoneComponent,

  ],
  imports: [
    CountUpModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatProgressBarModule,
    FormsModule,
    SwiperModule,
    MatIconModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    MatListModule,
    MatCardModule,

    MatExpansionModule,
    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
