import { Component } from '@angular/core';

// import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less']
})
export class LocationComponent  {

  // constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    // this.cookieService.set('SID', '', { sameSite: 'Lax' });
    // this.cookieService.set('__Secure-1PSID', '', { sameSite: 'Lax' });
    // this.cookieService.set('HSID', '', { sameSite: 'Lax'});
    // this.cookieService.set('SSID', '', { sameSite: 'Lax' });
    // this.cookieService.set('APISID', '', { sameSite: 'Lax' });
    // this.cookieService.set('SAPISID', '', { sameSite: 'Lax' });
    // this.cookieService.set('__Secure-1PAPISID', '', { sameSite: 'Lax'});
    // this.cookieService.set('SIDCC', '', { sameSite: 'Lax' });
    // this.cookieService.set('__Secure-1PSIDCC', '', { sameSite: 'Lax' });
  }


}
