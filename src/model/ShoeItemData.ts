import { Colors, Genders, ShoeItem } from "./ShoeItem";

export class ShoeItemData{
    private static shoes:Map<number, ShoeItem> = new Map<number, ShoeItem>;
    private static initID:number = 1;

    private static addItem(name:string, price:number, picture:string, gender:Genders, color:Colors, sizes:string[], description:string, brand:string){
        this.shoes.set(this.initID, new ShoeItem(this.initID, name, price, picture, gender, color, sizes, description, brand));
        this.initID++;
    }

    public static init():void{
        this.addItem("Nike Terminator High OG",299.99, "../assets/shoes/shoe1.png", Genders.M, Colors.Grey, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike");
        this.addItem("Air Max 1 '87",499.99, "../assets/shoes/shoe2.png", Genders.M, Colors.Red ,["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike")
        this.addItem("Air Max Furyosa",279.99, "../assets/shoes/shoe3.png", Genders.F, Colors.Brown, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Bold 'Descrição.","Nike");
        this.addItem("Air Max 1 '86 Original",1189.99, "../assets/shoes/shoe4.png", Genders.M, Colors.MultiColor ,["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike");
        this.addItem("Nike Cortez",379.99, "../assets/shoes/shoe5.png", Genders.F, Colors.White, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Air Max Scorpion",1299.99, "../assets/shoes/shoe6.png", Genders.K, Colors.Black, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"Descrição.","Nike");
        this.addItem("Run Swift 2", 249.99, "../assets/shoes/shoe7.png", Genders.K, Colors.Blue, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"Descrição.","Nike");
        this.addItem("Air Zoom Fire", 379.99, "../assets/shoes/shoe8.png", Genders.F, Colors.White, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Air Max 95",359.99, "../assets/shoes/shoe9.png", Genders.M, Colors.Red, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike");
        this.addItem("Air Max Excee",439.99, "../assets/shoes/shoe10.png", Genders.M, Colors.Black, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike");
        this.addItem("Air Max 97 OG",699.99, "../assets/shoes/shoe11.png", Genders.M, Colors.Yellow, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike")
        this.addItem("Nike Quest 5",139.99, "../assets/shoes/shoe12.png", Genders.F, Colors.Pink, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Air Force 1",599.99, "../assets/shoes/shoe13.png", Genders.F, Colors.Orange, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Air Jordan 1 Low",279.99, "../assets/shoes/shoe14.png", Genders.F, Colors.Green, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Waffle Debut Vintage",699.99, "../assets/shoes/shoe15.png", Genders.K, Colors.Green, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"Descrição.","Nike");
        this.addItem("Air Max 270",799.99, "../assets/shoes/shoe16.png", Genders.K, Colors.Black, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"Descrição.","Nike");
        this.addItem("Air Max Plus",379.99, "../assets/shoes/shoe17.png", Genders.M, Colors.Black, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike");
        this.addItem("Air Jordan XXXVII",2199.99, "../assets/shoes/shoe18.png", Genders.M, Colors.Grey, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike");
        this.addItem("Air Force 1 LV8",1119.99, "../assets/shoes/shoe19.png", Genders.K, Colors.Yellow, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"Descrição.","Nike");
        this.addItem("Air Max Bliss", 389.99, "../assets/shoes/shoe20.png", Genders.F, Colors.Yellow, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Metcon 8",499.99, "../assets/shoes/shoe21.png", Genders.F, Colors.MultiColor, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Nike Court Legacy", 439.99, "../assets/shoes/shoe22.png", Genders.K, Colors.White, ["32", "35", "35.5", "36" , "37", "38", "39", "40"],"Descrição.","Nike");
        this.addItem("Air Max 170", 589.99, "../assets/shoes/shoe23.png", Genders.M, Colors.White, ["32", "35", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48"],"Descrição.","Nike");
        this.addItem("Air Force 1 Premium", 899.99, "../assets/shoes/shoe24.png", Genders.F, Colors.Grey, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Jordan Post", 329.99, "../assets/shoes/shoe25.png", Genders.M, Colors.Red, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"],"Descrição.","Nike");
        this.addItem("Super Rep Go 3", 159.99, "../assets/shoes/shoe26.png", Genders.F, Colors.Red, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Air Max Plus 3", 329.99, "../assets/shoes/shoe27.png", Genders.F, Colors.MultiColor, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"],"Descrição.","Nike");
        this.addItem("Samba Classic", 174.99, "../assets/shoes/shoe28.png", Genders.M, Colors.Black, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"], "Descrição.","Adidas")
        this.addItem("Gazelle", 129.99, "../assets/shoes/shoe29.png", Genders.K, Colors.Blue, ["32", "35", "35.5", "36" , "37", "38", "39", "40"], "Descrição.", "Adidas");
        this.addItem("Cloudfoam Pure 2.0", 189.99, "../assets/shoes/shoe30.png", Genders.F, Colors.Grey, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"], "Descrição.", "Adidas");
        this.addItem("Ultraboost 5.0 DNA", 779.99, "../assets/shoes/shoe31.png", Genders.F, Colors.Black, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"], "Descrição.", "Adidas");
        this.addItem("Rider FV Pop FS", 499.99, "../assets/shoes/shoe32.png", Genders.M, Colors.Grey, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"], "Descrição.", "Puma")
        this.addItem("MIRACULOUS RS-X", 449.99, "../assets/shoes/shoe33.png", Genders.K, Colors.Red, ["32", "35", "35.5", "36" , "37", "38", "39", "40"], "Descrição.", "Adidas");
        this.addItem("Trae Young 2.0", 379.99,  "../assets/shoes/shoe35.png", Genders.F, Colors.Yellow, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"], "Descrição.", "Adidas")
        this.addItem("Dame 8 Basketball", 1199.99, "../assets/shoes/shoe36.png", Genders.K, Colors.Blue, ["32", "35", "35.5", "36" , "37", "38", "39", "40"], "Descrição .","Adidas");
        this.addItem("Shuffle Trainers", 1149.99, "../assets/shoes/shoe37.png", Genders.F, Colors.Black, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"], "Descrição.", "Puma");
        this.addItem("Rise NITRO", 1319.99, "../assets/shoes/shoe38.png", Genders.F, Colors.MultiColor, ["35", "36", "36.5", "38", "38.5", "39", "40", "40.5", "41", "42", "43", "44", "44.5"], "Descrição.", "Puma");
        this.addItem("FUTURE Match MG", 1129.99, "../assets/shoes/shoe39.png", Genders.M, Colors.MultiColor, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"], "Descrição.", "Puma");
        this.addItem("Slipstream Suede FS", 664.99, "../assets/shoes/shoe40.png", Genders.K, Colors.White, ["27.5", "28", "28.5", "29", "30", "31", "32", "33", "34", "34.5"], "Descrição.", "Puma");
        this.addItem("Renegade MC", 1299.99, "../assets/shoes/shoe41.png", Genders.M, Colors.Grey, ["36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5", "48", "49"], "Descrição.", "Puma");
        this.addItem("RBD Game Low", 689.99, "../assets/shoes/shoe42.png", Genders.F, Colors.White, ["35", "36", "38", "40" , "42", "43", "44", "45", "45.5", "46", "47", "47.5"], "Descrição.", "Puma");

        console.log("Initialising:",this.shoes);
    }

    public static has(id: number):boolean{
        return this.shoes.has(id);
    }

    public static getById(id:number):ShoeItem{
        return this.shoes.get(id)!;
    }

    public static getAll():ReadonlyMap<number, ShoeItem>{
        return this.shoes;
    }

    public static getByGender(gender: Genders):ReadonlyMap<number, ShoeItem>{
        let result: Map<number, ShoeItem> = new Map<number, ShoeItem>();
        this.shoes.forEach((v,k) => {
            if(v.Gender === gender){
                result.set(k, v);
            }
        });
        return result;
    }

}
