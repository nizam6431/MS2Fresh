(function (ng) {
    'use strict';
    
    function mainController($http) {
        var mCtrl = this;
        console.log('main controller');
    }
    ng.controller('mainCtrl', mainController);
    mainController.$inject = ['$http'];
})(app);