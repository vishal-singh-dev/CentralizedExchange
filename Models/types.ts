export class Order{
    public id: string;
    public type: 'buy' | 'sell';
    public price: number;
    public quantity: number;
    public timestamp: number;
}

export class Orders{
    public placeSellOrders:Order[];
    public placeBuyOrders:Order[];
}



export class Users{
    public id:number;
    public Stocks:Stocks[];
}

export interface CumulativePrices{
    [price:string]:{
        quantity:number;
        type: 'buy' | 'sell';
    }
}
class Stocks{
    public stock:string;
    public quantity:number;
    public buyprice:number;
    public currentPrice:number;
}
