⚠️ This project have been move to [toyyibpay-sdk-js](https://github.com/fadhilx/toyyibpay-sdk-js) ⚠️

# toyyibpay-nodejs

unofficial ToyyibPay Node.js SDK

## Installation

`npm install toyyibpay-nodejs`

## Examples

```js
let { ToyyibPay } = require("./index");
// let toyyib = ToyyibPay("secretkey", { dev: true }); // For SandBox
let toyyib = ToyyibPay("secretkey");

toyyib
  .getBank()
  .then(bill => {
    console.log(".getBank success");
    console.log(bill["data"]);
  })
  .catch(e => {
    console.log(".getBank on error");
  });
```

## Disclaimer

This is **NOT** an official SDK. I dont have OEM/Enterprise partnership, so i cant test the endpoint with parameter `partnerType`, i just write it according to docs. i will not responsible for any loss.

## Support

You can buy me a coffee:<br>
[![Donate Now](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UNME938XE8XJC&source=url)<br>
[<img src='https://www.iklanlah.com/images/toyyibpay-widget-sm-p.png' alt='ToyyibPay' height='60'/>](https://toyyibpay.com/fadhilx-open-source)<br>
Thanks for your support.
