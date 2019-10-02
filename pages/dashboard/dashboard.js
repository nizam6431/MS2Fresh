(function(ng){
    'use strict'

    function Dashboard(){
        var dashCtrl = this;
        console.log('dashboard controllers');
    }

    ng.controller('dashboardCtrl', Dashboard);
    ng.$inject = [];
})(app);