import {Order,Orders} from "../Models/types"
import { Orderbook } from "./Orderbook";

class PlaceOrders extends Orders{
     _orderbook:any;
    constructor(){
        super();
        this._orderbook=new Orderbook();
    }
    private addBuyOrders(stock:string,order:Order):void{
        this.placeBuyOrders.push(order);
        this.placeBuyOrders.sort((x,y)=>x.timestamp-y.timestamp)
        this._orderbook.CumulativeOrders(stock,order);
    }
    private addSellOrders(stock:string,order:Order):void{
        this.placeSellOrders.push(order);
        this.placeSellOrders.sort((x,y)=>x.timestamp-y.timestamp)
        this._orderbook.CumulativeOrders(stock,order);
    }
   
}