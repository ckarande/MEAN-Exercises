(function(){
    angular.module("retireEasy")
        .controller("ProfileCtrl", [ProfileCtrl]);

    function ProfileCtrl () {
        var vm  = this;
        vm.firstName = "a";
        vm.lastName = "b";
        vm.bankAcc = "10";
        vm.bankRouting = "2222";
        vm.ssn = "1222";
    }
})();