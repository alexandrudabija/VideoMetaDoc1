import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

@Output() scroll = new EventEmitter<any>();
selectedLanguage:any;
leanguageArray=[
  {leanguage:'ro'},
  {leanguage:'ru'},
  {leanguage:'it'},
  {leanguage:'en'},
  {leanguage:'fr'},
  {leanguage:'ar'},
  {leanguage:'ja'},
  {leanguage:'es'},
  {leanguage:'de'},
  {leanguage:'tr'},
  {leanguage:'uk'},
  {leanguage:'zh'},

]

constructor(private translate: TranslateService ) {}

ngOnInit(): void {

    const browserLang:any = this.translate.getBrowserLang();
    this.translate.setDefaultLang(browserLang);
    this.selectedLanguage = browserLang;

}

switchLanguage():void {

  this.translate.use(this.selectedLanguage);
}


scrollTo(name:any)
{

this.scroll.emit(name)

}





}
