import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent {


  cartCheckout: Cart = { items: [] };
  OrderForm!: FormGroup;
  orderId!: number;
  payment: boolean = false

  constructor(private route: ActivatedRoute,private Router: Router, private OrderBuilder: FormBuilder,public CartService: CartService) {}

  ngOnInit() {
    // Retrieve the cart data from the query parameter
    const cartData = this.route.snapshot.queryParams['cart'];
    if (cartData) {
      this.cartCheckout.items = JSON.parse(cartData);
    }

    const date = new Date();

    this.OrderForm = this.OrderBuilder.group({
      items: this.OrderBuilder.array(this.cartCheckout.items),
      user: this.OrderBuilder.group({
        idUser: [],
        firstname: [],
        lastname: [],
        email: []
      }),
      address: this.OrderBuilder.group({
        phone: [],
        country: [],
        street: [],
        houseNumber: [],
        zipcode: [],
        city: []
      }),
      payment: this.OrderBuilder.group({
        total: this.CartService.getTotal(this.cartCheckout.items),
        currency: '$',
        dateOrder: date ,
        paymentMethod: this.OrderBuilder.group({
          payment: "card_Visa_Mastercard",
          bank_transfer: this.OrderBuilder.group({
            iban: "null"
          }),
          card_Visa_Mastercard: this.OrderBuilder.group({
            numberCard: [],
            ll_aa: [],
            cvc: []
          }),
          paypal: this.OrderBuilder.group({
            paypalEmail: "null"
          })
        })
      })
      })


  }

  back(): void {
    const myParameter = 'products';

    this.Router.navigate(['/index',myParameter])

}

  createOrder(): void {


   this.orderId =Math.floor(Math.random() * 101)
  }

}
