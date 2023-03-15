
export interface Cart
{
items:Array<CartItem>;

}

export interface  CartItem
{

  id: number,
  name: String,
  model: String,
  price: number,
  qty: number,
  img: String
}
