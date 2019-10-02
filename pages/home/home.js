(function(ng){
    'use strict';

    function Home(homeServices) {
        var hCtrl = this;

        hCtrl.sliderImageList = [];

        hCtrl.GetSliderImages = function(){
            homeServices.GetSliderImages().then(function(res){
                hCtrl.sliderImageList = res.data;
            }).catch(function(){});
        }
        hCtrl.GetSliderImages();
    }
    ng.controller('homeCtrl', Home);
    ng.$inject = ['homeServices'];
})(app);
