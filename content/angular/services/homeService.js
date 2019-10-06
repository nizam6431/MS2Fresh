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
        this.Get = function(name, data){ return JSON.parse(localStorage.setItem(name)); }
        this.Set = function(name, data){ localStorage.setItem(name, JSON.stringify(data)) }
        this.Update = function(name, data) { localStorage.removeItem(name);localStorage.setItem(name, data); }
        this.Remove = function(name) { localStorage.removeItem(name); }
    }

    ng.service('homeServices', HomeServices);
    ng.$inject = ['$http'];
})(app);