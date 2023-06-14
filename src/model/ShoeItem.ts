import { TesteServiceService } from 'src/service/TesteService.service';

export enum Genders{
    M,
    F,
    U
}

export enum Colors{
    Black,
    White,
    Grey,
    Red,
    Green,
    Blue,
    Orange,
    Brown,
    Pink,
    Yellow,
    MultiColor
}

export class ShoeItem{
  static has(itemId: number) {
    throw new Error("Method not implemented.");
  }
     id:number;
     name:string;
     price:number;
     photo:string;
     gender:Genders;
     color:Colors;
     size:string[];
     description:string;
     brand:string;
shoes_name: any;

    public constructor(
        id:number,
        name:string,
        price:number,
        photo:string,
        gender:Genders,
        color:Colors,
        size:string[],
        desciption:string,
        brand:string
        ){
        this.id = id;
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.gender = gender;
        this.color = color;
        this.size = size;
        this.description= desciption;
        this.brand = brand;
    }

    public get Id():number{
        return this.id;
    }

    public get Name():string{
        return this.name;
    }

    public get Size():string[]{
        return this.size;
    }

    public get Price():number{
        return this.price;
    }

    public get Photo():string{
        return this.photo;
    }

    public get Gender():Genders{
        return this.gender;
    }

    public get Color():Colors{
        return this.color;
    }

    public get Description():string{
        return this.description;
    }

    public get Brand():string{
        return this.brand;
    }

    public getGenderDescription():string{
        switch(this.gender)
        {
            case Genders.M:
                return "Tênis Masculino";
            case Genders.F:
                return "Tênis Feminino";
            case Genders.U:
                return "Unissex";
            default:
                console.error("Unrecogniesd Shoe gender:",this.gender, " from ", this);
                return "ERROR";
        }
    }

}
