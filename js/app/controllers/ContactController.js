function ContactController(){
  this.name = "whut"
  this.email = "deez@nuts.com"
  this.phone = "1-900-MIX-A-LOT"

  var vm = this

  this.changeName = function(ngclick){
    vm.name=ngclick
  }
}

angular
  .module("app")
  .controller('ContactController', ContactController)