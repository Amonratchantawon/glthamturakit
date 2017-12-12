import { AccountModel } from "app/layout/account.model";

export class BuyModel {
    docno: string;
    docdate: Date;
    contact: AccountModel;
    items: Array<item>;
    amount: number;
    vatamount: number;
    totalamount: number;
    Discount: number;
    netamount: number;
}

export class item {
    item: AccountModel;
    qty: number;
    unitprice: number;
    vat: number;
    amount: number;
}