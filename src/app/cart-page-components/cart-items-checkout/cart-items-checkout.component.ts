import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/model/ShoppingCart';

@Component({
  selector: 'app-cart-items-checkout',
  templateUrl: './cart-items-checkout.component.html',
  styleUrls: ['./cart-items-checkout.component.css']
})
export class CartItemsCheckoutComponent {

  public constructor(private router:Router){
  }

  public GetTotalCost():number{
    let cost:number = 0;
    ShoppingCart.getAll().forEach(i =>{
      cost += i.count * i.shoeItem.Price;
    });
    return Math.round(cost * 100) / 100;
  }

  public navigateTo(path: string){
    this.router.navigate([path]);
  }

}
