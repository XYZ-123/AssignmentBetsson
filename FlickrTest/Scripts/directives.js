var FlickrDirectives = angular.module("FlickrDirectives",[]);

FlickrDirectives.directive("ngImageonload", function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                var widthToHeightRatios = [ 0.6, 0.75, 1, 1.3, 1.6];
                findRatio(element, widthToHeightRatios);
                /*this is done in order to preserve natural ratio of loaded picture*/
                element.parent().parent().addClass("finished");
                element.parent().css("height", "100%");
                element.parent().css("width", "100%");
                setTimeout(function(){

                    element.css("opacity",1);
                },100);
            });
        }
    };});

function findRatio(elem, ratios)
{
    var mindiff = 100;
    var minratio = 0;
    for(var ratio in ratios)
    {
        var currDiff = Math.pow((elem[0].width/elem[0].offsetHeight) - ratios[ratio], 2);
        if(currDiff < mindiff)
        {
            mindiff = currDiff;
            minratio = ratios[ratio];
        }
    }
    elem.addClass("ratio"+minratio*100);
}