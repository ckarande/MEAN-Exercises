(function(){
    angular.module("app.pages")
        .controller("AllocationsCtrl", [AllocationsCtrl]);

    function AllocationsCtrl () {
        var vm  = this;
        vm.firstName = "c";
        vm.lastname = "k";
        vm.stocks = "10";
        vm.funds = "20";
        vm.bonds = "25";
    }
})();

