function StaffController(){
  this.name="Charles Barkley"
  this.email="chuck@tnt.com"
  this.phone = "6666666"
}

angular 
  .module('app')
  .controller('StaffController', StaffController)

