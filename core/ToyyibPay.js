class ToyyibPay {
  constructor(secret, { dev } = {}) {
    this.secret = secret;
    this.isDev = dev || false;
  }
  getLibrary() {}
  getBank() {}
  getBankFPX() {}
  getPackage() {}
  createAccount() {}
  getUserStatus() {}
  getAllUser() {}
  createCategory() {}
  getCategoryDetails() {}
  createBill() {}
  createBillMultiPayment() {}
  runBill() {}
  getAllBill() {}
  getBillTransactions() {}
  getSettlement() {}
  getSettlementSummary() {}
}
export default ToyyibPay;
