(function(ng){
    'use strict';

    function Login(){
        var lCtrl = this;
        
        lCtrl.user = {
            userName: 'nizam@gmail.com',
            password: '123'
        };
        
        lCtrl.login = function(user){
            if(user.userName == 'nizam@gmail.com' && user.password == '123') {
                alert('loged in');
                return;
            }
        }
    }

    ng.controller('loginCtrl', Login);
    ng.$inject = [];
})(app);