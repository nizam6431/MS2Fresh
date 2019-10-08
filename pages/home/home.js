(function(ng, $){
    'use strict';

    function Home($rootScope, $state, homeServices) {
        var hCtrl = this;

        $rootScope.addToCartList = [];
        hCtrl.sliderImageList = [];
        hCtrl.selectedItem = {};

        hCtrl.GetSliderImages = function(){
            homeServices.GetSliderImages().then(function(res){
                hCtrl.sliderImageList = res.data;
            }).catch(function(){});
        }
        hCtrl.GetSliderImages();
        hCtrl.GetDetails = function(item){
            $state.go('details');
            // $('#details').modal({
            //     show: true,
            //     keyboard: false,
            //     backdrop: 'static'
            // });
            $rootScope.selectedFishItem = item;
        }

        hCtrl.addToCart = function (product) {
            if ($rootScope.addToCartList.length == 0) {
                $rootScope.addToCartList.push(product);
            } else {
                $rootScope.addToCartList.find(function (item) {
                    if (item.Id == product.Id) {
                        alert('already booked'); return false;
                    }
                });
                $rootScope.addToCartList.push(product);
            }
        }
    }
    ng.controller('homeCtrl', Home);
    ng.$inject = ['$rootScope', '$state', 'homeServices'];
})(app, jQuery);
