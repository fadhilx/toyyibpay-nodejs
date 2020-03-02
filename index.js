let axios = require("axios").default;
let urls = require("./core/urls.js");
const querystring = require("querystring");
function ToyyibPay(secret, { dev } = {}) {
  let toyyibpay = axios.create({
    baseURL: "https://toyyibpay.com/",
    timeout: 30000,
  });
  if (dev) {
    toyyibpay = axios.create({
      baseURL: "https://dev.toyyibpay.com",
      timeout: 30000,
    });
  }
  function getLibrary() {
    let api = {};
    for (let methodName in urls) {
      api[methodName] = data => {
        let url = urls[methodName].url;
        let params = { userSecretKey: secret };
        for (inputkey in urls[methodName].input) {
          if (data == undefined) {
            throw `${methodName} require parameter`;
          }
          if (data[inputkey] != undefined) {
            params[inputkey] = data[inputkey];
          } else if (params[inputkey] != undefined) {
            params[inputkey] = params[inputkey];
          } else if (!urls[methodName].input[inputkey].optional) {
            throw `parameter ${inputkey} required on method ${methodName}`;
          }
        }
        console.log(toyyibpay.defaults.baseURL, url, { params });
        return toyyibpay.post(url, querystring.stringify(params));
      };
    }
    return api;
  }
  let api = getLibrary();
  return {
    getBank: api.getBank,
    getBankFPX: api.getBankFPX,
    getPackage: api.getPackage,
    createAccount: api.createAccount,
    getUserStatus: api.getUserStatus,
    getAllUser: api.getAllUser,
    createCategory: api.createCategory,
    getCategoryDetails: api.getCategoryDetails,
    createBill: api.createBill,
    createBillMultiPayment: api.createBillMultiPayment,
    runBill: api.runBill,
    getAllBill: api.getAllBill,
    getBillTransactions: api.getBillTransactions,
    getSettlement: api.getSettlement,
    getSettlementSummary: api.getSettlementSummary,
  };
}

module.exports = { ToyyibPay };
