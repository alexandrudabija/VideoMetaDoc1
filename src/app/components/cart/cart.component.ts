import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import {Observable, Subscription} from 'rxjs';
import { CartItem } from 'src/app/models/cart.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  constructor(private CartService: CartService,private _snackBar : MatSnackBar ,public Router:Router)
      {}


      // public dataSource: any = { items: [] };
  public dataSource: Array<CartItem> = [



    ];
  subscription! :Subscription;

   horizontalPosition: MatSnackBarHorizontalPosition = 'center';
   verticalPosition: MatSnackBarVerticalPosition = 'top';

   // for the beautiful display in the basket ,it will be displayed in rows and columns !
   // we need to set correct the rows and colums in cart.component
   displayedColumns: Array<string> = [
    'img',
     'name',
     'model',
     'price',
     'qty',
     'total',
     'action',
   ];

  public _cart$ = new Observable<any>


  ngOnInit ():void
  {
  this.CartService.cart.subscribe((data:any)=>{

    this.dataSource=data.items
  })


  }
  get cart()
   {
    return this.dataSource;
  }

toCheckout()
{

  this.Router.navigate(['/checkout'], { queryParams: { cart: JSON.stringify(this.cart) } });


}

toggle() {
  const myParameter = 'products';

  this.Router.navigate(['/index',myParameter])


}
// we call total for all elemts in cart
getTotal(items: Array<CartItem>): number {    return this.CartService.getTotal(items);  }

onClearCart () {   this.CartService.clearCart() }

removeOneItem(item:CartItem):void{ this.CartService.removeOneItem(item)}

removeQuantity(item:CartItem):void { this.CartService.removeQuantity(item) }

onAddQuantity(item:CartItem):void { this.CartService.addToCart(item)   }



}
