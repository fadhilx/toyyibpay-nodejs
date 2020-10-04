# toyyibpay-nodejs

unofficial ToyyibPay Node.js SDK

## Installation

`npm install toyyibpay-nodejs`

## Examples

```js
require("dotenv").config()
const ToyyibPay = require("toyyibpay-nodejs").ToyyibPay
let toyyib = ToyyibPay("secretkey", { dev: process.env.STAGE })

toyyib
  .getBank()
  .then(bill => {
    console.log(".getBank success");
    console.log(bill["data"]);
  })
  .catch(e => {
    console.log(".getBank on error");
  });

const bilCode = "exampleCode"

toyyib
  .getBillTransactions({
    billCode 
  })
  .then(bill => {
    console.log(".getBank success");
    console.log(bill["data"]);
  })
```

## Disclaimer

This is **NOT** an official SDK. I dont have OEM/Enterprise partnership, so i cant test the endpoint with parameter `partnerType`, i just write it according to docs. i will not responsible for any loss.

## Support

You can buy me a coffee:<br>
[![Donate Now](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UNME938XE8XJC&source=url)<br>
[<img src='https://www.iklanlah.com/images/toyyibpay-widget-sm-p.png' alt='ToyyibPay' height='60'/>](https://toyyibpay.com/fadhilx-open-source)<br>
Thanks for your support.
