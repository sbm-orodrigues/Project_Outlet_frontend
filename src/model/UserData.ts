import { User } from "./User";

export class UserData{
    private static users:Map<string, User> = new Map<string, User>;

    public static init():void{
        this.users.set('gui@out9.com.br', new User('gui@out9.com.br', '12345678', 'Guilherme', 'Silva', '123456789'));
        this.users.set('oliver@out9.com.br', new User('oliver@out9.com.br', '12345678', 'Oliver', 'Rodrigues', '0881267099'));
        this.users.set('wesley@out9.com.br', new User('wesley@out9.com.br', '12345678', 'Wesley', 'Silva', '0855267092'));
    }

    public static add(user: User):boolean{
        if(this.users.has(user.email))
            return false;

        this.users.set(user.email, user);
        return true;
    }

    public static set(user: User):void{
        this.users.set(user.email, user);
    }

    public static get(email: string):User|undefined{
        return this.users.get(email);
    }

}
