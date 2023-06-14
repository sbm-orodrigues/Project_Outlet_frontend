import { TesteServiceService } from 'src/service/TesteService.service';
import { ShoeItem } from "./ShoeItem";
import { ShoeOrder } from "./ShoeOrder";

export class ShoppingCart {
  static shoeItem: any;

  constructor(private testeServiceService: TesteServiceService){
    this.testeServiceService = testeServiceService;


  }

    private static readonly STORAGE_KEY = "ShoppingCart";
    private static shoeOrderList: ShoeOrder[] = [];

    private static logDebug():void {
        console.log("Carrinho de compras:", this.shoeOrderList);
    }

    private static saveToStorage():void{
        sessionStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.shoeOrderList));
    }

    public static setSessionStorage():void {
        const storageValue = sessionStorage.getItem(this.STORAGE_KEY);
        if (storageValue) {
            try {
                this.shoeOrderList = JSON.parse(storageValue).map((item: any) => new ShoeOrder(
                    new ShoeItem(item.shoeItem.id,
                        item.shoeItem.name,
                        item.shoeItem.price,
                        item.shoeItem.picturePath,
                        item.shoeItem.gender,
                        item.shoeItem.color,
                        item.shoeItem.sizes,
                        item.shoeItem.description,
                        item.shoeItem.brand),
                    item.shoeSize,
                    item.count));
            } catch (e) {
                console.error("Erro ao analisar armazenamento no carrinho:", e);
            }
        } else {
            this.shoeOrderList = [];
        }
        this.logDebug();
    }

    private static addToCart(shoeOrder: ShoeOrder):void{
      debugger
        let flag: boolean = false;
        this.shoeOrderList.forEach(i =>{
            console.log("Adicionando ao carrinho:", shoeOrder, i);
            if(shoeOrder.shoeSize === i.shoeSize &&
                shoeOrder.shoeItem.Id === i.shoeItem.Id){
                i.count++;
                flag = true;
                return;
            }
        });
        if(flag)
            return;
        this.shoeOrderList.push(shoeOrder);
    }

    public static addById(itemId: number, shoeSize: string):void {
      // if (!ShoeItemData.has(itemId)) {
      //     console.error(`Item com ID ${itemId} não encontrado em ShoeItemData:`, ShoeItemData);
      //     return;
      // }
      // let shoeItem: ShoeItem|any;
      // this.testeServiceService.getShoeById(itemId).subscribe(
      //   (shoeItem: ShoeItem) => {
      //     const shoeOrder = new ShoeOrder(shoeItem, shoeSize, 1);
      //     this.addToCart(shoeOrder);
      //     this.saveToStorage();
      //     this.logDebug();
      //   },
      //   (error: any) => {
      //     console.log(error);
      //   }
      // );
  }

    public static getAll(): ShoeOrder[] {
        return this.shoeOrderList;
    }

    public static getTotalItemCount(): number {
        let count: number = 0;
        this.shoeOrderList.forEach(i => {
            count += i.count;
        });
        return count;
    }

    public static removeAll():void{
        this.shoeOrderList = [];
        this.saveToStorage();
    }

    public static remove(shoeOrder: ShoeOrder):void{
        this.shoeOrderList = this.shoeOrderList.filter(i =>
            !(i.shoeSize === shoeOrder.shoeSize && i.shoeItem.Id === shoeOrder.shoeItem.Id));
        this.saveToStorage();
    }

    public static removeQuantity(shoeOrder: ShoeOrder):void{
        let flag: boolean = false;
        this.shoeOrderList.forEach(i => {
            if(i.shoeSize === shoeOrder.shoeSize && i.shoeItem.Id === shoeOrder.shoeItem.Id){
               if(i.count <= 1){
                flag = true;
               }else{
                i.count--;
               }
            }
        });

        if(flag){
            this.remove(shoeOrder);
        }else{
            this.saveToStorage();
        }
    }
  }


