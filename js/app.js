(function () {
    'use strict';

    angular.module('LunchApp', [])

        .controller('LunchAppController', function ($scope) {
            $scope.items = "";
            $scope.result = "";
           

            $scope.checkFood = function () {

                if ($scope.items == "") {

                    $scope.result = "Please enter data first";
                    $scope.colour = "red";
                    $scope.border = "lunch-menu-red";

                } else {
                    var checker = valueofFood($scope.items);

                    if(checker <= 3){
                        $scope.result = "Enjoy!";
                        $scope.colour = "green";
                        $scope.border = "lunch-menu-green";
                    }else{
                        $scope.result = "Too much!";
                        $scope.colour = "green";
                        $scope.border = "lunch-menu-green";
                    }
                    

                }

            };

            function valueofFood(string) {
                var totalitems = 0;
                var splititems = string.split(',')
                totalitems = splititems.length;

                return totalitems

            }


        });


})();