export interface OrderInfo {
    orderId: string;
    region: string;
    country:string;
    itemType:string;
    salesChannel:string;
    orderPriority:string;
    orderDate:string;
    shipDate:string;
    noOfUnits:number;
    unitPrice:number;
    unitCost:number;
    totalRevenue:number;
    totalCost:number;
    totalProfit:number;
    nric:string;
  }
  
  export interface OrderInfoWithCount {
    orderInfos: OrderInfo[];
    totalCount: number;
  }