import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  productsArray= new BehaviorSubject<any>({products:[
    {
    id:1,
    name:"Duhua",
    model:"",
    qty:1,
    price:1000,
    img:"./assets/images/products/c1.jpg"
    },
    {
      id:2,
      name:"Imou",
      model:"",
      qty:1,
      price:2000,
      img:"./assets/images/products/c2.jpg"

      }
      ,
      {
        id:3,
        name:"Ajax",
        model:"",
        price:8675,
        qty:1,
        img:"./assets/images/products/c3.jpg"

        },

        {
          id:4,
          name:"Reolink",
          model:"",
          price:3233,
          qty:1,
          img:"./assets/images/products/c4.jpg",

          }
          ,

          {
            id:5,
            name:"Reolink",
            model:"",
            price:3456,
            qty:1,
            img:"./assets/images/products/c5.jpg",

            }
            ,

            {
              id:6,
              name:"Reolink",
              model:"",
              price:3434,
              qty:1,
              img:"./assets/images/products/c6.jpg",

              }
              ,

              {
                id:8,
                name:"Reolink",
                model:"",
                price:12000,
                qty:1,
                img:"./assets/images/products/c7.jpg",

                }
                ,

                {
                  id:9,
                  name:"Reolink",
                  model:"",
                  price:114,
                  qty:1,
                  img:"./assets/images/products/c8.jpg",

                  }



    ]})

    get products()
    {

      return this.productsArray.value
    }


}
