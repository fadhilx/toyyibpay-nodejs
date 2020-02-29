var User = {
  create() {
    /*
      Fullname - User full name
      User name - User name to access or login
      Email - User Email OR User Id (not necessary in email format)
      Password - User Password
      Phone - User Phone
      Bank - User Bank Selection
      Account No - User Bank Account No
      Account Holder Name - User Account Holder Name
      Registration No - User Company / Business / Organization Registration No
      Package - User Package
      Following - Enterprise User Secret Key
      */
  },

  getStatus() {
    /*
    0 - Inactive
    1 - New-Pending Approval
    2 - Active
    */
  },
  getAllUser() {
    /*
    userSecretKey - Secret key for OEM or Enterprise user
    partnerType - OEM or ENTERPRISE
    */
  },
};

module.exports = User;
