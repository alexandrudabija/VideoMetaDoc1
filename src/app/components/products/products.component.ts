import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination,  Scrollbar, A11y,EffectFade} from 'swiper';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import {  Observable } from 'rxjs';
import { Cart ,CartItem } from 'src/app/models/cart.model';
import { Router } from '@angular/router';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade])
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class ProductsComponent implements OnInit {

  constructor (private CartService :CartService,private ProductsService:ProductsService, public Router :Router) {}

public products$ = new Observable<any>
public cart$= new Observable<any>
public _cart: Cart = { items: [] };
public itemsQuantity:number = 0;

  ngOnInit()
  {

   this.cart$= this.CartService.cart,
    this.products$= this.ProductsService.productsArray

    this.cart$.subscribe((data: any) => {
      this.cart = data;
      // this method use the set cart() to set qty in badge
    })


  }

  get cart():Cart
   {
    return this._cart;
  }


  set cart(cart: Cart)
  {
    this._cart = cart;
    this.itemsQuantity = cart.items.map((item: any) => item.qty)
      .reduce((prev: any, current: any) => prev + current, 0);
  }

  getTotal(items: Array<CartItem>): number
     {
    return this.CartService.getTotal(items);
  }

  addToCart(obj: CartItem)
  {


  this.CartService.addToCart(    {
          id:obj.id,
          name:obj.name,
          model:obj.model,
          price:obj.price,
          qty:1,
          img:obj.img,

  })






  }


  onClearCart():void
  {
   this.CartService.clearCart();
 }

 toCart():void
 {
this.Router.navigate(['/cart'])


 }

    // config for swiper !
    swiperConfig: any = {
      breakpoints: {
        1000: {
          spaceBetween: 20,
          slidesPerView: 3,
          Pagination: true,
          Scrollbar: true,
          Navigation: true,
        },
        600: {
          spaceBetween: 14,
          slidesPerView: 2,
          Pagination: true,
          Scrollbar: true,
          Navigation: true,
        },

        0: {
          spaceBetween: 10,
          slidesPerView: 1,
          Pagination: true,
          Scrollbar: true,
          Navigation: true,
        },
      },
    };




}
