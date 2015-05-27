(function(){
    angular.module("app.pages")
        .controller("ProfileCtrl",
        ["profileResource",
            ProfileCtrl]);

    function ProfileCtrl (profileResource) {
        var vm  = this;
        profileResource.query(function(data) {
            vm.profile = data[0];
        });
    }
})();