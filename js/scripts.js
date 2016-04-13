// business logic
function BankAccount(balance) {
  this.balance = balance;
}

BankAccount.prototype.balanceAmount = function() {
  return "$" + this.balance;
}

// user interface logic
$(document).ready(function() {
  $("form#account-setup").submit(function(event) {
    event.preventDefault();

    $(".initial-form").toggle();
    $(".second-form").toggle();

  });
  $("form#manage-account").submit(function(event) {
    event.preventDefault();

    $(".second-form").toggle();
    $(".final-form").toggle();

  });
  $("form#balance-form").submit(function(event) {
    event.preventDefault();

    $(".final-form").toggle();
    $(".second-form").toggle();

  });
});
