import { Component, Input, ViewChild } from '@angular/core';
import { ShoeItem } from 'src/model/ShoeItem';
import { ShoppingCart } from 'src/model/ShoppingCart';
import { ShoePageComponent } from '../shoe-page/shoe-page.component';
import { NotificationComponent } from '../../notification/notification.component';

@Component({
  selector: 'app-size-buttons',
  templateUrl: './size-buttons.component.html',
  styleUrls: ['./size-buttons.component.css']
})
export class SizeButtonsComponent {
  @Input() public notification: NotificationComponent = new NotificationComponent();
  @Input() shoe: ShoeItem|null = null;
  selectedSize: string|null = null;

  public getSizes():string[]{
    console.log(this.shoe!.size)
    return this.shoe!.size;
  }

  public onButtonClick(size:string){
    this.selectedSize = size;
  }

  public addToCart(){
    if(this.selectedSize == null){
      this.showNotification("Escolha um tamanho");
      return;
    }


    // ShoppingCart.addById(this.shoe!.Id, this.selectedSize);
    console.log(this.shoe!.id, this.selectedSize)
    this.showNotification("Adicionado com sucesso ao carrinho!");
  }

  private showNotification(message: string): void {
    console.log(message);
    this.notification.message = message;
    this.notification.showMessage();
  }

}
