(function(){
  'use strict';


  angular.module('ShoppingListCheckOff',[])

  .controller('ToBuyController',ToBuyController)
  .controller("AlreadyBoughtController",AlreadyBoughtController)
  .service("ShoppingListCheckOffService",ShoppingListCheckOffService);


ToBuyController.$inject['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var controller=this;

    controller.toBuyItems=ShoppingListCheckOffService.gettoBuy();

    controller.doBuyService=function (index) {
      ShoppingListCheckOffService.doBuy(index);
    }

  }

AlreadyBoughtController.$inject['ShoppingListCheckOffService'];


  function AlreadyBoughtController(ShoppingListCheckOffService) {

    var controller=this;
    controller.boughtItems = ShoppingListCheckOffService.getalreadyBought();

  }

  function ShoppingListCheckOffService(){

    var service = this;

    var toBuyItems = [{ name: "cookies", quantity: 10 },
      { name: "milk", quantity: 20 },
      { name: "tea", quantity: 100 },
      { name: "coffee", quantity: 50 },
      { name: "sugar", quantity: 40 },
      { name: "candy", quantity: 35 },
      { name: "cookies", quantity: 20 }]
    var boughtItems = [];

    service.doBuy=function(index){
      boughtItems.push(toBuyItems[index]);
      toBuyItems.splice(index, 1);
    }

    service.gettoBuy=function () {
      return toBuyItems;
    }

    service.getalreadyBought=function(){
      return boughtItems;

    }



  }


})();
