(function(ng){
    'use strict';

    function Fish(){
        var fishCtrl = this;
        console.log('fish controller');
    }

    ng.controller('fishCtrl', Fish);
    ng.$inject = [];
})(app);