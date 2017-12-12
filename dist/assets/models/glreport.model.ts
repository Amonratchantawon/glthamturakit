// export class GlReportDetailModel {
//     firstDayText: string;
//     lastDayText: string;
//     startdate: Date;
//     enddate: Date;
//     type: string;
//     acceach: Array<AcceachModel>;
//     balance: BalanceModel = new BalanceModel();
//     daily: DailyModel = new DailyModel();
//     gain: GainModel = new GainModel();
// }
// export class AcceachModel {
//     accountno: string;
//     company: string;
//     date: Date;
//     enddate: Date;
//     startdate: Date;
//     title: string;
//     current: CurrentModel = new CurrentModel();
//     carryforward: CarryforwardModel = new CarryforwardModel();
//     bringforward: BringforwardModel = new BringforwardModel();
//     account: AccountModel = new AccountModel();
//     transaction: Array<AcceacTransactionModel>;

// }
// export class CurrentModel {
//     credit: number;
//     debit: number;
// }
// export class CarryforwardModel {
//     accountname: string;
//     accountno: string;
//     credit: number;
//     debit: number;
//     description: string;
//     docdate: string;
//     docno: string;
//     document: string;
//     timestamp: string;
// }
// export class BringforwardModel {
//     accountname: string;
//     accountno: string;
//     credit: number;
//     debit: number;
//     description: string;
//     docdate: string;
//     docno: string;
//     document: string;
//     timestamp: string;
// }
// export class AccountModel {
//     accounttype: AccountTypeModel = new AccountTypeModel();
//     accountno: String;
//     created: Date;
//     name: string;
//     parent: string;
//     status: string;
//     unitprice: number;
//     vat: number;
//     _id: string;
// }
// export class AccountTypeModel {
//     accounttypename: string;
//     accounttypeno: string;
//     created: Date;
//     _id: string;
// }
// export class AcceacTransactionModel {
//     docdate: Date;
//     list: Array<AcceachListModel>;
// }
// export class AcceachListModel {
//     accountname: string;
//     accountno: string;
//     credit: number;
//     debit: number;
//     description: string;
//     docdate: Date;
//     docno: string;
//     document: string;
//     timestamp: string;
// }
// export class BalanceModel {
//     company: string;
//     date: Date;
//     enddate: Date;
//     startdate: Date;
//     title: string;
//     asset: BalanceAssetModel = new BalanceAssetModel();
//     debt: BalanceDebtModel = new BalanceDebtModel();
// }
// export class BalanceAssetModel {
//     name: string;
//     transaction: Array<BalanceTransactionModel>;
// }
// export class BalanceTransactionModel {
//     accounttype: string;
//     summary: number
//     sumtrans: BalancesumtransModel = new BalancesumtransModel();
//     list: Array<BalancelistModel>;

// }
// export class BalancesumtransModel {
//     accountno: string;
//     amount: number;
// }
// export class BalancelistModel {
//     accountname: string;
//     accountno: string;
//     amount: number;
// }
// export class BalanceDebtModel {

//     name: string;
//     transaction: Array<BalanceDebtTransactionModel>;

// }
// export class BalanceDebtTransactionModel {

//     accounttype: string;
//     summary: number;
//     sumtrans: BalanceDebtTransactionSumtransModel = new BalanceDebtTransactionSumtransModel();
//     list: Array<BalanceDebtTransactionListModel>;

// }
// export class BalanceDebtTransactionSumtransModel {
//     accountno: string;
//     amount: number;
// }
// export class BalanceDebtTransactionListModel {
//     accountname: string;
//     accountno: string;
//     amount: number;
// }
// export class DailyModel {
//     company: string;
//     date: Date;
//     enddate: Date;
//     startdate: Date;
//     title: string;
//     transaction: Array<DailyTransactionModel>;
// }
// export class DailyTransactionModel {
//     docdate: Date;
//     docno: string;
//     remark: string;
//     list: Array<DailyListModel>;
// }
// export class DailyListModel {
//     accountname: string;
//     accountno: string;
//     credit: number;
//     debit: number;
//     description: string;
//     document: string;
//     timestamp: string;
// }
// export class GainModel {

//     company: string;
//     date: Date;
//     enddate: Date;
//     startdate: Date;
//     title: string;
//     transaction: Array<GainTransactionModel>;

// }
// export class GainTransactionModel {
//     accounttype: string;
//     summary: number;
//     list: Array<GainTransactionListModel>;
// }
// export class GainTransactionListModel {
//     accountname: string;
//     accountno: string;
//     amount: number;
// }