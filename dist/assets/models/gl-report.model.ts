export class GlReportModel {
    _id:string;
    statementname: string;
    type: string;
    startdate: Date;
    enddate: Date;
    daily: GlDailyReportModel = new GlDailyReportModel();
    acceach: Array<GlAcceachModel> = [];
    gain: GlGainReportModel = new GlGainReportModel();
    balance: GlBalanceReportModel = new GlBalanceReportModel();
}


//  Gl-Daily
export class GlDailyReportModel {
    date: Date;
    company: string;
    startdate: Date;
    enddate: Date;
    title: string;
    transaction: Array<GlDailyTransactionModel> = [];
}

export class GlDailyTransactionModel {
    docdate: Date;
    docno: string;
    list: Array<GlDailyTransactionListModel> = [];
    remark: string;
}

export class GlDailyTransactionListModel {
    accountname: string;
    accountno: string;
    description: string;
    document: string;
    timestamp: string;
    debit: number;
    credit: number;
}
// END Gl-Daily


// Gl-acceach
export class GlAcceachModel {
    date: Date;
    company: string;
    startdate: Date;
    enddate: Date;
    title: string;
    accoutno: string;
    bringforward: GlAcceachBringModel = new GlAcceachBringModel();
    carryforward: GlAcceachCarryModel = new GlAcceachCarryModel();
    summarydebit: number;
    summarycredit: number;
    transaction: Array<GlAcceachTransactionModel> = [];

}
export class GlAcceachBringModel {
    docdate: Date;
    docno: string;
    accountname: string;
    accountno: Date;
    document: Date;
    timestamp: Date;
    debit: number;
    credit: number;
    description: string;

}
export class GlAcceachCarryModel {
    docdate: Date;
    docno: string;
    accountname: string;
    accountno: string;
    document: string;
    timestamp: string;
    debit: number;
    credit: number;
    description: string;
}
export class GlAcceachTransactionModel {
    docdate: Date;
    list: Array<GlAcceachTransactionListModel> = [];
}
export class GlAcceachTransactionListModel {
    docdate: Date;
    docno: string;
    accountname: string;
    accountno: string;
    document: string;
    timestamp: string;
    debit: number;
    credit: number;
    description: string;
}

// END Gl-acceach

//  Gl-Gain
export class GlGainReportModel {
    date: Date;
    company: string;
    startdate: Date;
    enddate: Date;
    title: string;
    transaction: Array<GlGainTransactionModel> = [];
    grossprofit: number;
    operatingprofit: number;
    netprofit: number;

}
export class GlGainTransactionModel {
    accounttype: string;
    list: Array<GlGainTransactionModel> = [];
    summary: number;
}
export class GlListTransactionModel {
    accountno: string;
    amount: number;
}
// END Gl-Gain



//  Gl-Balance
export class GlBalanceReportModel {
    date: Date;
    company: string;
    enddate: Date;
    title: string;
    asset: GlBalanceAssetReportModel = new GlBalanceAssetReportModel();
    debt: GlBalanceDebtReportModel = new GlBalanceDebtReportModel();

}
export class GlBalanceAssetReportModel {
    name: string;
    transaction: Array<GlBalanceAssetTransactionReportModel> = [];
}
export class GlBalanceAssetTransactionReportModel {
    accounttype: string;
    list: Array<GlBalanceAssetListTransactionReportModel> = [];
    summary: number;
}
export class GlBalanceAssetListTransactionReportModel {
    accountno: string;
    amount: number;
}

export class GlBalanceDebtReportModel {
    name: string;
    transaction: Array<GlBalanceDebtTransactionReportModel> = [];
}
export class GlBalanceDebtTransactionReportModel {
    accounttype: string;
    list: Array<GlBalanceDebtListTransactionReportModel> = [];
    summary: number;
    sumtrans: GlBalanceDebtSumtransTransactionReportModel = new GlBalanceDebtSumtransTransactionReportModel();
}
export class GlBalanceDebtListTransactionReportModel {
    accountno: string;
    amount: number;
}
export class GlBalanceDebtSumtransTransactionReportModel {
    accountno: string;
    amount: number;
}


