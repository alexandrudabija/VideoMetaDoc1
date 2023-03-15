import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutUs',
  templateUrl: './aboutUs.component.html',
  styleUrls: ['./aboutUs.component.less']
})
export class AboutUsComponent {
aboutUs:string='We are a team of technicians authorized to install video surveillance systems. With 6 years of experience in the field of security, complete key installation services for any type of location including houses, villas, businesses, shops, stores, restaurant, orchards, lakes and guesthouses. We use high quality equipment and offer support to help you choose the right system for your needs. They also provide maintenance and repair services for systems installed by us. Our warranty includes both labor and accessories to benefit you and keep you running smoothly. We are kind, honest and responsible, we are always ready to help you. We offer 24/7 support for any questions or issues you may have. Contact us today to discuss your video surveillance needs and get a custom quote.'

arrayBenefices:any =[


{

  id:1,
  name:"Rapidity",
  img:"./assets/images/benefices/express-delivery.png"

  // img:"./assets/images/benefices/express-delivery.png"

  , text: "Speed ​​and mobility - Fast installation"
  }


  ,

  {

id:2,
name:"Free Trial",

img:"./assets/images/benefices/home.png"
, text: "Risk Free Experience - Free Trial"
}

,


  {

    id:3,
    name:"Guarantee",
    img:"./assets/images/benefices/check.png"
, text: "Extended Warranty - Up to 36 Months Coverage"
    }


]


}
