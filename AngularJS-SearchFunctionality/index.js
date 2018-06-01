var app = angular.module('searchfunctionality', []);
app.controller('SearchFuncController', function ($scope, $window) {
    $scope.ItemDetails = [
        {
            ItemCode: "KB384", ItemName: "KeyBoard",
            ItemPrice: "500"
        },
    {
        ItemCode: "MU932",
        ItemName: "Mouse",
        ItemPrice: "200"
    },
    {
        ItemCode: "PD843",
        ItemName: "Pendrive",
        ItemPrice: "400"
    },
    {
        ItemCode: "DV0495",
        ItemName: "DVD Drive",
        ItemPrice: "1000"
    }]; //To Declare List
    $scope.filteredItems = $scope.ItemDetails;
    $scope.ClearTextBoxes = function () {
        $window.location.reload();
        //$scope.searchItemCode = '';
        //$scope.searchItemName = '';
        //$scope.searchItemPrice = '';
    }
    $scope.SearchItems = function () {
        $scope.filteredItems = [];
        $scope.ItemDetails.forEach(function (item) {
            if (!$scope.searchItemCode && !$scope.searchItemName && !$scope.searchItemPrice) {

                $scope.filteredItems = $scope.ItemDetails;

            }
            else {
                var result = searchTable(item, $scope.searchItemCode, $scope.searchItemName, $scope.searchItemPrice);
                if (result)
                    $scope.filteredItems.push(item);
            }
        })

    }

    function searchTable(item, searchItemCode, searchItemName, searchItemPrice) {

        return ((searchItemCode ? item.ItemCode.toLowerCase().indexOf(searchItemCode.toLowerCase()) : -1) > -1 || (searchItemName ? item.ItemName.toLowerCase().indexOf(searchItemName.toLowerCase()) : -1) > -1 || item.ItemPrice == searchItemPrice) ? true : false;

    }
});