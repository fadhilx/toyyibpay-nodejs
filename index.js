let Bank = require("./models/bank.js");
let Package = require("./models/package.js");
let User = require("./models/user.js");
let Category = require("./models/category.js");
let Bill = require("./models/bill.js");
let Transaction = require("./models/transaction.js");
let Settlement = require("./models/settlement.js");
let urls = require("./core/urls.js");

function getLibrary() {
  let api = {};
  for (let methodName in urls) {
    api[methodName] = data => {
      let params = {};
      for (inputkey in urls[methodName].input) {
        if (data == undefined) {
          return console.log(`${methodName} require parameter`);
        }
        if (
          !(
            data[inputkey] != undefined ||
            urls[methodName].input[inputkey].optional
          )
        ) {
          if (!urls[methodName].input[inputkey].optional) {
            params[inputkey] = "";
          }
        }
      }
      console.log(urls[methodName].url, params);
    };
  }
  return api;
}

getLibrary().getBank();
function ToyyibPay(secret) {
  return {
    getBank() {
      return Bank.get();
    },
    getBankFPX() {
      return Bank.getFPX();
    },
    getPackage() {
      return Package.getAll();
    },
    createAccount() {
      return User.create();
    },
    getUserStatus() {
      return User.getStatus();
    },
    getAllUser() {
      return User.getAllUser();
    },
    createCategory() {
      return Category.create();
    },
    getCategoryDetails() {
      return Category.getDetails();
    },
    createBill() {
      return Bill.create();
    },
    createBillMultiPayment() {
      return Bill.createMulti();
    },
    runBill() {
      return Bill.runBill();
    },
    getAllBill() {
      return Bill.getAll();
    },
    getBillTransactions() {
      return Transaction.get();
    },
    getSettlement() {
      return Settlement.getAll();
    },
    getSettlementSummary() {
      return Settlement.getSummary();
    },
  };
}

module.exports = { ToyyibPay };
