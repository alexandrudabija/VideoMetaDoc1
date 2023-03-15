import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });


  constructor(
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {

  }

  addToCart(obj: CartItem): void {
    const items = [...this.cart.value.items];
    const itemsInCart = items.find((item: any) => item.id === obj.id);

    if (itemsInCart) {
      itemsInCart.qty += 1;
      this.cart.next({ items: items });
    } else {
      const array = [...items, obj];
      this.cart.next({ items: array });
    }




    this._snackBar.open(this.translate.instant('1 item added to cart.'), 'OK',{duration:3000})

  }


getTotal (items:Array<CartItem>):number
{
  // find all the quantity, and after , we sum the total for each row
  return items.map((item)=> item.price*item.qty ).reduce((prev,current)=> prev+current,0)

}

clearCart()
{
  this.cart.next({items:[ ]})
  this._snackBar.open('cart is cleared.', 'ok', {duration:3000})

}

get items ()
{

  return this.cart.value
}


removeOneItem (item:CartItem):void
{
  const filteredItems= this.cart.value.items.filter (
    (_item)=> _item.id !== item.id
  )
    this.cart.next({items:filteredItems})
    this._snackBar.open('1 item remved from cart .', 'ok', {duration:3000})
}









removeQuantity(item:CartItem):void
{

  let itemForRemoval :CartItem |undefined;
 let filterItems = this.cart.value.items.map((_item)=>


    {
            if(  _item.id === item.id)
            {
                  _item.qty--;

                        // if quantity is 0 , we need to cancel from cart !
                        if(_item.qty===0)
                        {

                            itemForRemoval = _item;

                        }
            }


            return _item;

    })




    if(itemForRemoval)
    {
      this.removeOneItem(itemForRemoval)


    }


    else {
            this.cart.next({items:filterItems})

           this._snackBar.open('1 item removed from cart ','ok ',{duration:3000})


    }



}



}
