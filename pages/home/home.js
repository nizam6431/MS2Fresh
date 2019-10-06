(function(ng, $){
    'use strict';

    function Home(homeServices) {
        var hCtrl = this;

        hCtrl.sliderImageList = [];
        hCtrl.selectedItem = {};

        hCtrl.GetSliderImages = function(){
            homeServices.GetSliderImages().then(function(res){
                hCtrl.sliderImageList = res.data;
            }).catch(function(){});
        }
        hCtrl.GetSliderImages();
        hCtrl.GetDetails = function(item){
            $('#details').modal({
                show: true,
                keyboard: false,
                backdrop: 'static'
            });
            hCtrl.selectedItem = item;
        }
    }
    ng.controller('homeCtrl', Home);
    ng.$inject = ['homeServices'];
})(app, jQuery);
