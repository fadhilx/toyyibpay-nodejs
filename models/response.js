class BankResponse {
  id;
  bank;
  status;
}
class UserResponse {}
class PackageResponse {}
class CategoryResponse {}
class TransactionResponse {}
class BillResponse {}
class SettlementResponse {}

//index.php/api/getBank
getBank = [
  { id: "1", bank: "Maybank", status: "1" },
  { id: "2", bank: "CIMB Bank", status: "1" },
  { id: "3", bank: "Bank Islam", status: "1" },
  { id: "4", bank: "Bank RBS", status: "1" },
  { id: "5", bank: "Bank Mandiri", status: "1" },
];

//index.php/api/getBankFPX
getBankFPX = [
  { CODE: "ABB0233", NAME: "Affin Bank" },
  { CODE: "ABMB0212", NAME: "Alliance Bank" },
  { CODE: "AMBB0209", NAME: "AmBank" },
];
//index.php/api/getPackage
getPackage = [
  { id: "1", package: "Pakej Standard", fee: "0.30", status: "1" },
  { id: "2", package: "Pakej Pantas", fee: "0.50", status: "1" },
  { id: "4", package: "Pakej Santai", fee: "0.00", status: "1" },
];
//index.php/api/createAccount // enterprise
createAccount = [{ UserSecretKey: "vrbl86xf-wj1h-q0l3-95kk-4q4erulvsc0h" }];
//index.php/api/getUserStatus // enterprise
getUserStatus = [{ status: "1" }];
//admin/api/getAllUser // hybrid
getAllUserO = [
  {
    userDate: "2018-10-11",
    userId: "45",
    userName: "zahiruliman",
    registrationNo: "XXXXXXXXXXX",
    userFullname: "Mohd Zahirul Iman bin Mohammad Rafee",
    userEmail: "zahirul.imn@gmail.com",
    userPhone: "0182500999",
    BankAccountNo: "155444478239",
    bankAccountName: "Mohd Zahirul Iman",
    bankName: "Maybank",
    userStatus: " (Not Active)",
  },
];
getAllUserE = [
  {
    userDate: "2019-01-22",
    userId: "100",
    userName: "lznk",
    registrationNo: "LISPBM6190",
    userFullname: "LEMBAGA ZAKAT NEGERI KEDAH",
    userEmail: "sadaqah@zakatkdh.com",
    userPhone: "047332819",
    BankAccountNo: "552023977939",
    bankAccountName: "Lembaga Zakat Negeri Kedah",
    bankName: "Maybank",
    userStatus: " (Not Active)",
  },
];
//index.php/api/createCategory
createCategory = [{ CategoryCode: "j0tzqhka" }];
//index.php/api/getCategoryDetails
getCategoryDetails = [
  {
    categoryName: "Makanan",
    categoryDescription: "Kuih Cara",
    categoryStatus: "1",
  },
];
//index.php/api/createBill
createBill = [{ BillCode: "gcbhict9" }];
//index.php/api/createBillMultiPayment
createBillMultiPayment = [{ BillCode: "j0tzqhka" }];
//index.php/api/runBill
//admin/api/getAllBill
getAllBillO = [
  {
    billDate: "2018-10-11",
    ID: "39",
    NAME: "Kuih Cara Meletop",
    billDescription: "Kutipan pakej Kuih Cara meletop",
    fixPrice: "Not fix",
    billTo: "",
    billEmail: "",
    billPhone: "",
    billStatus: " (Not Active)",
    billCode: "kuih-cara-meletop",
    billAmount: "1.00",
    categoryCode: "tsrbklhf",
    categoryName: "Makanan",
    userName: "fitweb",
  },
];
getAllBillE = [
  {
    billDate: "2019-01-23",
    ID: "151",
    NAME: "Payment_for_order_5955",
    billDescription: "Payment_for_order_5955",
    fixPrice: "Not fix",
    billTo: "",
    billEmail: "",
    billPhone: "",
    billStatus: " (Active)",
    billCode: "wti3cxz4",
    billAmount: "20.00",
    categoryCode: "y8n0gm94",
    categoryName: "Sadaqah",
    userName: "lznk",
  },
];
/* returnUrl=
    status_id : Payment status. 1= success, 2=pending, 3=fail
    
    billcode: Your billcode / permanent link
    
    order_id : Your external payment reference no, if specified
    */
/* returnUrl=
    refno : Payment reference no
    
    status : Payment status. 1= success, 2=pending, 3=fail
    
    reason : Reason for the status received
    
    billcode : Your billcode / permanent link
    
    order_id : Your external payment reference no, if specified
    
    amount : Payment amount received
    */
//index.php/api/getBillTransactions
getBillTransactions = [
  {
    billName: "Payment_for_order_51",
    billDescription: "Payment_for_order_51",
    billTo: "",
    billEmail: "",
    billPhone: "",
    billStatus: "1",
    billPermalink: "zyq1pq6s",
    categoryCode: "vkptzhxe",
    categoryName: "Wordpress",
    userName: "fitweb",
    billpaymentStatus: "3",
    billpaymentAmount: "1.00",
    billpaymentInvoiceNo: "B00040-288-424703111018",
  },
];
//admin/api/getSettlement
getSettlementO = [
  {
    userID: "44",
    userName: "fitweb",
    settlementDate: "2019-10-28",
    amount: "1.00",
    amountNett: "1.00",
    different: "0.00",
    standard: "0.00",
    santai: "1.00",
    creditCard: "0.00",
    transaction: "1",
  },
  {
    userID: "69",
    userName: "izuanbakar",
    settlementDate: "2019-10-31",
    amount: "100.00",
    amountNett: "99.00",
    different: "1.00",
    standard: "100.00",
    santai: "0.00",
    creditCard: "0.00",
    transaction: "1",
  },
  {
    userID: "83",
    userName: "bbqmalaysia",
    settlementDate: "2019-10-29",
    amount: "148.00",
    amountNett: "148.00",
    different: "0.00",
    standard: "0.00",
    santai: "148.00",
    CreditCard: "0.00",
    transaction: "1",
  },
  {
    userID: "102",
    userName: "matzul",
    settlementDate: "2019-11-04",
    amount: "50.00",
    amountNett: "50.00",
    different: "0.00",
    Standard: "0.00",
    Santai: "50.00",
    creditCard: "0.00",
    transaction: "1",
  },
];
getSettlementE = [
  {
    settlementDate: "2019-11-06",
    amount: "100.00",
    amountNett: "98.00",
    different: "2.00",
    standard: "0.00",
    santai: "0.00",
    creditCard: "100.00",
    transaction: "1",
  },
];
//admin/api/getSettlementSummary
getSettlementSummaryO = [
  {
    userID: "44",
    userName: "fitweb",
    today: "19-10-31",
    Amount_Pending: "1.00",
    Amount_settle: "5.00",
    AmountNett_Pending: "1.00",
    AmountNett_Settle: "0.00",
    Different_Pending: "0.00",
    Different_Settle: "5.00",
    Standard_Pending: "0.00",
    Standard_Settle: "0.00",
    Santai_Pending: "1.00",
    Santai_Settle: "5.00",
    Creditcard_Pending: "0.00",
    Creditcard_settle: "0.00",
    Transaction_Pending: "6",
    Trnsaction_Settle: "6",
  },
];
getSettlementSummaryE = [
  {
    userId: "243",
    userName: "go2aum",
    Today: "19-11-01",
    Amount_Pending: "100.00",
    Amount_Settle: "10157.00",
    AmountNett_Pending: "98.00",
    AmountNett_Settle: "10026.46",
    Different_pending: "2.00",
    Different_settle: "130.54",
    Standard_pending: "0.00",
    Standard_settle: "4330.00",
    Santai_pending: "0.00",
    Santai_settle: "0.00",
    Creditcard_Pending: "100.00",
    Creditcard_settle: "5827.00",
    Transaction_Pending: "21",
    Transaction_Settle: "21",
  },
];
