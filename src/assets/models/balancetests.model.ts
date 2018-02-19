export class BalancetestModel {
    company: string;
    date: Date;
    enddate: Date;
    startdate: Date;
    title: string;
    summary: SummaryModel = new SummaryModel();
    transaction:Array<TransactionModel>;
}

export class SummaryModel {
    afcredit: number;
    afdebit: number;
    bfcredit: number;
    bfdebit: number;
    currcredit: number;
    currdebit: number;
}

export class TransactionModel {
    accountno: string;
    afcredit: number;
    afdebit: number;
    bfcredit: number;
    bfdebit: number;
    currcredit: number;
    currdebit: number;
    name:string;
}