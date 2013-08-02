var mapApp = angular.module("mapApp", ['google-maps']);

mapApp.controller("mapCntrl", function mapCntrl($scope, $http) {
    angular.extend($scope, {
        center: {
            latitude: 0,
            longitude: 0,
        },
        markers: [],
        zoom: 8,
    });

    $scope.Address = "";
    $scope.count = 0;
    $scope.status = "";
    $scope.geocoder = new google.maps.Geocoder();
    $scope.mapResults = [];

    $scope.Geocode = function() {
        $scope.geocoder.geocode({
                'address': $scope.Address
            },
            function(results, status) {
                console.log(results);
                console.log(status);
                if (status == google.maps.GeocoderStatus.OK) {
                    $scope.count = results.length;
                    $scope.mapResults = results;
                } else {
                    $scope.status = "Geocode was not successful: " + status;
                }
            });
    }
});
