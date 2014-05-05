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
	},
	addTransform: function(transform) {
		var originalTransform = $(this).css("-webkit-transform");
		$(this).css("-webkit-transform", originalTransform + " " + transform);
	},
	cssAnimationEnd: function(callback) {
		$(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', callback);
		return $(this);
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
		
		$scope.playAudio();
		$scope.requestFullScreen();

		var containerBounds = $scope.$contentsContainer.bounds();
		$scope.enumrateChildScopes(function(childScope, index) {
			$interval(function(){
				childScope.$element.css({display: "block"})
													 .centerAlign(containerBounds)
				childScope.$effectContainer
											.addClass('animated bounceIn')
											.cssAnimationEnd(function(){
												$img = $(this).find("img");
												$img.css({ "-webkit-filter": "brightness(100%) sepia(0%)" })
														.transit({ "-webkit-filter": "brightness(60%) sepia(100%)" }, 
																		 1000 * 2.5,
																		 "linear");
												childScope.$element
																			.transit({ y: "-=" + containerBounds.height + "px" }, 
																							 100 * containerBounds.height,
																							 "linear");
											});
				childScope.$image.rotate(Math.random() * 60 - 30);
			}, 3500 * index, 1);
		});
	};
	
	$scope.playAudio = function() {
		sound.play();
	};

	$scope.requestFullScreen = function() {
		if (screenfull.enabled)
			screenfull.request();
	};
}]);

madeleine.controller('PhotoCtrl', ['$scope', function($scope) {

}]);