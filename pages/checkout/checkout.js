(function(ng){
    'use strict';
    function CheckOut() {
        var chCtrl = this;

        chCtrl.userProdutList = []; 
    }
    CheckOut.$injet = ['$scope'];
    ng.controller('checkOutCtrl', CheckOut);
})(app);