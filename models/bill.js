var Bill = {
  create() {
    /*
    userSecretKey - User Secret Key
    categoryCode - Category Code. Get your Category Code from Create Category API
    billName - Your bill name. Bill Name will be displayed as bill title
    * Max 30 alphanumeric characters, space and '_' only
    billDescription- For fixed amount bill, set it to 0. For dynamic bill (user can key in the amount paid), set it to 1
    billPriceSetting - Put 1 if the bill has fix amount, put 0 if dynamic amount.
    billPayorInfo - If you want to create open bill without require payer information, set it to 0. If you need payer information, set it to 1
    billAmount - Key in the bill amount. The amount is in cent. e.g. 100 = RM1. If you set billPriceSetting to 1 (dynamic bill), please put 0
    billReturnUrl - Key in return Url if you need the bill to be redirected to your own page upon payment completion.
    billCallbackUrl - Key in callback url if you need the bill to be redirected to your callback page upon sucessful of payment transaction.
    billExternalReferenceNo - Provide your own system reference no if you think it is required. You may use this reference no to check the payment status for the bill.
    billTo - If you intend to provide the bill to specific person, you may fill the person nam in this field. If not, please leave it blank.
    billEmail - Provide your customer email here
    billPhone - Provide your customer phone number here.
    billSplitPayment - Set 1 if the you need the payment to be splitted to other toyyibPay users.
    billSplitPaymentArgs - Provide JSON for split payment. e.g. [{"id":"johndoe","amount":"200"}]
    billPaymentChannel - Set 0 for FPX, 1 Credit Card and 2 for both FPX & Credit Card.
    billDisplayMerchant - [OPTIONAL] Set 1 to display merchant info in your customer's email and 0 to hide merchant info.
    billContentEmail - [OPTIONAL] Provide additional messages by sending an extra email to your customer.
    billAdditionalField - [OPTIONAL] Provide JSON for extra field of your bill. e.g.
    $array2 = array("add_input_1" => "Alamat", "add_input_2" => "Poskod", "add_input_3" => "Jalan");
    $json = json_encode($array2);
    billChargeToCustomer - Below are the values available :
    1. Leave blank to set charges for both FPX and Credit Card on bill owner.
    2. Set "0" to charge FPX to customer, Credit Card to bill owner.
    3. Set "1" to charge FPX bill owner, Credit Card to customer.
    4. Set "2" to charge both FPX and Credit Card to customer.
    */
  },
  createMulti() {
    /*
    userSecretKey - User Secret Key
    categoryCode - Category Code. Get your Category Code from Create Category API
    billName - Your bill name. Bill Name will be displayed as bill title
    * Max 30 alphanumeric characters, space and '_' only
    billDescription- For fixed amount bill, set it to 0. For dynamic bill (user can key in the amount paid), set it to 1
    billPriceSetting - Put 1 if the bill has fix amount, put 0 if dynamic amount.
    billPayorInfo - If you want to create open bill without require payer information, set it to 0. If you need payer information, set it to 1
    billAmount - Key in the bill amount. The amount is in cent. e.g. 100 = RM1. If you set billPriceSetting to 1 (dynamic bill), please put 0
    billReturnUrl - Key in return Url if you need the bill to be redirected to your own page upon payment completion.
    billCallbackUrl - Key in callback url if you need the bill to be redirected to your callback page upon sucessful of payment transaction.
    billExternalReferenceNo - Provide your own system reference no if you think it is required. You may use this reference no to check the payment status for the bill.
    billTo - If you intend to provide the bill to specific person, you may fill the person nam in this field. If not, please leave it blank.
    billEmail - Provide your customer email here
    billPhone - Provide your customer phone number here.
    billSplitPayment - Set 1 if the you need the payment to be splitted to other toyyibPay users.
    billSplitPaymentArgs - Provide JSON for split payment. e.g. [{"id":"johndoe","amount":"200"}]
    billMultiPayment - Set 1 if you need the multi payment on.
    billPaymentChannel[OPTIONAL] - 0 = FPX Only, 1 = Credit/Debit Card only, 2 = FPX and Credit Card
    billDisplayMerchant[OPTIONAL] - 0 = Not display merchant details in email, 1 = Display merchant details in email.
    billContentEmail[OPTIONAL] - Provide your email content.
    */
  },
  runBill() {
    /*
    userSecretKey - User Secret Key
    billCode - Your billcode / permanent link
    billpaymentAmount - If the original bill's billPriceSetting = 1, leave this blank. The bill amount will follow the original bill's amount. Otherwise (original bill's billPriceSetting = 0), enter the amount in cent (e.g. 100 = RM 100).
    billpaymentPayorName- Customer name
    billpaymentPayorPhone - Customer phone number
    billpaymentPayorEmail - Customer email
    billBankID - If you need to by pass payment page, please key in Bank Code (refer to Get Bank FPX API).
    */
  },
  getAll() {
    /*
    userSecretKey - Secret key for OEM or Enterprise user
    partnerType - OEM or ENTERPRISE
    Year-month - Required year & month, if left blank all bill will be return
    */
  },
};
module.exports = Bill;
