(function (ng) {
    'use strict';

    function HomeServices($http) {
        this.GetSliderImages = function(){
            return $http({
                method: 'Get',
                url: '../../../data/slider.json'
            });
        }
    }

    function NSHelper() {
        this.Get = function(name){
            localStorage.setItem();
        }
        this.Set = function(){}
        this.Remove = function(){}
    }

    ng.service('homeServices', HomeServices);

    ng.$inject = ['$http'];
})(app);