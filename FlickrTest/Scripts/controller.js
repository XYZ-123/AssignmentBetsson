var FlickrCtrl = angular.module("FlickrController", ["ngStorage"]);

FlickrCtrl.controller("FlickrController",["$scope","$http","$localStorage",function($scope,$http,$localStorage){
        $scope.searchResults = $localStorage.searchResults || [];
        $scope.tags = $localStorage.tags || [];
        $scope.sources = ["Cache", "Flickr"];
        $scope.loading = false;
        $scope.showSeo = false;
        $scope.seoSearchResults = [];


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
        $scope.facebookShareLink = function(){
            return "http://facebook.com/sharer/sharer.php?u="+window.location+"?tags="+$scope.tags;
        };
        $scope.twitterShareLink = function(){
            return "https://twitter.com/intent/tweet?hashtags=demo&original_referer="+window.location+"?tags="+$scope.tags;
        };
        $scope.redditShareLink = function(){
            return "http://www.reddit.com/submit?url='"+window.location+"?tags="+$scope.tags+"'";
        };
}]);
