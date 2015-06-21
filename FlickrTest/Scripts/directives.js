var FlickrDirectives = angular.module("FlickrDirectives",[]);

FlickrDirectives.directive("ngImageonload", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                element.parent().parent().addClass("finished");

                setTimeout(function(){element.css("opacity",1);},100);
            });
        }
    };});