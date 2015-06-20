var FlickrCtrl = angular.module("FlickrController", ["ngStorage"]);

FlickrCtrl.controller("FlickrController",["$scope","$http","$localStorage",function($scope,$http,$localStorage){
        $scope.searchResults = $localStorage.searchResults || [];
        $scope.tags = $localStorage.tags || [];
        $scope.sources = ["Cache","Flickr"];

        $scope.search = function(tags)
        {
            if(!tags || tags.length < 3)
                return;
            $scope.tags = $localStorage.tags = tags;
            var url = window.location + "Home/GetImages";

            $http.post(url, {tags:tags}).success(function(data) {
                console.log(data);
                $scope.searchResults = $localStorage.searchResults = data;
            });
        }
        $scope.getSource = function(source)
        {
            return $scope.sources[source];
        }
}]);
