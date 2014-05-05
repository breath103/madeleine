madeleine = angular.module('madeleine', []);
madeleine.directive('mOutlet', function() {
 	return {
		link: function(scope, element, attr) {
			outlet_name = "$" + attr['mOutlet'];
			scope[outlet_name] = $(element);				
		}  		
	};
});

function getEnviroment(){
	return $("#enviroment").html();
}

madeleine.controller('SlidshowCtrl', ['$scope', '$interval',  function($scope, $interval) {
	// shared : TODO check it's called only one time
	sound = new Howl({ urls: ["music.mp3"] });

	$scope.currentOrientation = 0;

	$scope.init = function() {
		var changeCallback = function(){
			// if we change this value without this timeout block, angularJS couldn't recognize model change
			setTimeout(function(){
				alert("!!!!");
		  	$scope.currentOrientation = window.orientation;
		  	$(window).scrollTop();
			}, 1);
	  };
		changeCallback();
		window.addEventListener('orientationchange', changeCallback);
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
		
		if (getEnviroment() == "production") {
			$scope.playAudio();
			$scope.requestFullScreen();
		}

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
																							  "linear"
																							  );
												// setTimeout(function(){
												// 	childScope.$element.css({opacity: 1}).animate({opacity: 0});
												// }, 1000);
											});
				childScope.$image.rotate(Math.random() * 40 - 20);
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