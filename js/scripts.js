// business logic
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
}

BankAccount.prototype.balanceAmount = function() {
  return "$" + this.balance;
}


// user interface logic


$(document).ready(function() {
  $("button.form1-button").click(function(event) {
    event.preventDefault();

    var inputtedName = $("input#name-input").val();
    var inputtedBalance = parseInt($("input#initial-deposit").val());
    var newAccount = new BankAccount(inputtedName, inputtedBalance);

    $(".form1").toggle();
    $(".form2").toggle();


    $("button.form2-button").click(function(event) {
      event.preventDefault();

      var newDeposit = parseInt($("input#deposit-input").val());
      var newWithdrawal = parseInt($("input#withdraw-input").val());

      newAccount.balance += newDeposit;
      newAccount.balance -= newWithdrawal;

      $("ul#account-balance").append("<li>" + newAccount.name + "'s balance is: " + newAccount.balanceAmount() + "</li>");


      $(".form2").toggle();
      $(".form3").toggle();


      $("button.form3-button").click(function(event) {
        event.preventDefault();

        $(".form3").toggle();
        $(".form2").toggle();

      });
    });
  });
});
