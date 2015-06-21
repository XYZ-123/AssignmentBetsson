var FlickrCtrl = angular.module("FlickrController", ["ngStorage"]);

FlickrCtrl.controller("FlickrController",["$scope","$http","$localStorage",function($scope,$http,$localStorage){
        $scope.searchResults = $localStorage.searchResults || [];
        $scope.tags = $localStorage.tags || [];
        $scope.sources = ["Cache", "Flickr"];
        $scope.loading = false;

        $scope.ratios = [3/4, 5/3, 4/3, 1, 3/5];

        $scope.search = function(tags)
        {
            if(!tags || tags.length < 3)
                return;
            $scope.loading = true;
            $scope.tags = $localStorage.tags = tags;
            var url = window.location + "Home/GetImages";

            $http.post(url, {tags:tags}).success(function(data) {
                console.log(data);
                $scope.loading = false;
                $scope.searchResults = $localStorage.searchResults = data;
            });
        };
        $scope.getSource = function(source)
        {
            return $scope.sources[source];
        }
}]);
