madeleine = angular.module('madeleine', []);
madeleine.directive('mOutlet', function() {
 	return {
		link: function(scope, element, attr) {
			outlet_name = "$" + attr['mOutlet'];
			scope[outlet_name] = $(element);				
		}  		
	};
});


$.fn.extend({
	bounds: function(){
		var position = $(this).position();
		return {
			left: position.left,
			top: position.top,
			width: $(this).width(),
			height: $(this).height()
		};
	},
	centerAlign: function(super_bounds) {
		return $(this).each(function(index) {
			var $this = $(this);
			var bounds = $this.bounds();
			$this.css({
				left: (super_bounds.width - bounds.width) / 2,
				top: (super_bounds.height - bounds.height) / 2
			});
		});
	}, 
	rotate: function(deg){
		return $(this).each(function(index) {
			var $this = $(this);
			$this.css({
				"transform":"rotate(" + deg + "deg)",
				"-ms-transform":"rotate(" + deg + "deg)",/* IE 9 */
				"-webkit-transform":"rotate(" + deg + "deg)" /* Opera, Chrome, and Safari */
			});
		});
	}
});

madeleine.controller('SlidshowCtrl', ['$scope', '$interval',  function($scope, $interval) {
	// shared : TODO check it's called only one time
	sound = new Howl({ urls: ["music.mp3"] });

	$scope.init = function() {

	};

	$scope.enumrateChildScopes = function(block) {	
		var index = 0;
		var childScope = $scope.$$childHead;
		while (childScope) {
			block(childScope, index++);
			childScope = childScope.$$nextSibling;
		}
	};

	$scope.play = function(){
		$scope.$introCover.addClass('animated flipOutY');
		
		// $scope.playAudio();
		// $scope.requestFullScreen();
		var containerBounds = $scope.$contentsContainer.bounds();
		$scope.enumrateChildScopes(function(childScope, index) {
			$interval(function(){
				childScope.$element
											.css({display: "block"})
											.centerAlign(containerBounds)
											.addClass('animated bounceIn');
				childScope.$image.rotate(Math.random() * 60 - 30);
			}, 3500 * index, 1);
		});
	};
	
	$scope.playAudio = function() {
		sound.play();
	};

	$scope.requestFullScreen = function() {
		screenfull.request();
	};
}]);

madeleine.controller('PhotoCtrl', ['$scope', function($scope) {

}]);