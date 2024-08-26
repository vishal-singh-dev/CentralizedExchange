import { CumulativePrices, Order } from "../Models/types";

export class Orderbook{
    public buyOrders:Map<string,CumulativePrices[]>;
    public sellOrders:Map<string,CumulativePrices[]>;
    
    public CumulativeOrders(stock:string,order:Order):void{
        if(order.type=="buy"){
        if(!this.buyOrders.has(stock)){
          this.buyOrders.set(stock,[]);
        }
            var Orderprice=this.buyOrders.get(stock)?.find(x=>x[order.price]);
            if(Orderprice){
                Orderprice[order.price].quantity+=order.quantity;

            }
        }

        else{
            if(!this.sellOrders.has(stock)){
                this.sellOrders.set(stock,[]);
              }
                  var Orderprice=this.sellOrders.get(stock)?.find(x=>x[order.price]);
                  if(Orderprice){
                      Orderprice[order.price].quantity+=order.quantity;
      
                  }
              } 
        }

        public updateOrders(stock:string,order:Order){
            var buystockvalue=this.buyOrders.get(stock)?.find(x=>x[order.price]);
            if(buystockvalue){
                if(buystockvalue[order.price].quantity>=order.quantity){
                    buystockvalue[order.price].quantity-=order.quantity;
                }
            }
            var sellstockvalue=this.buyOrders.get(stock)?.find(x=>x[order.price]);
            if(sellstockvalue){
                if(sellstockvalue[order.price].quantity>=order.quantity){
                    sellstockvalue[order.price].quantity-=order.quantity;
                }
            }
            
        }
    }