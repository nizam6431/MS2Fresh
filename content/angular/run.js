(function (ng) {
    'use strict';

    function Run($rootScope, $state, $stateParams) {
        $rootScope.state = $state;
        $rootScope.stateParams = $stateParams;
    }

    ng.run(Run);

    ng.$inject = ['$rootScope', '$state', '$stateParams'];
})(app);