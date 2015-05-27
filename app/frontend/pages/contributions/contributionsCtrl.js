(function(){
    angular.module("app.pages")
        .controller("ContributionsCtrl",
        ["contributionsResource",
            ContributionsCtrl]);

    function ContributionsCtrl (contributionsResource) {
        var vm  = this;
        contributionsResource.query(function(data) {
            vm.contributions = data[0];
        });
    }
})();