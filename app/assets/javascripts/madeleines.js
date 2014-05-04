madeleine = angular.module('madeleine', []);
madeleine.directive('mOutlet', function() {
 	return {
		link: function(scope, element, attr) {
			outlet_name = "$" + attr['mOutlet'];
			scope[outlet_name] = $(element);				
		}  		
	};
});
madeleine.controller('SlidshowCtrl', ['$scope', function($scope) {
	// shared : TODO check it's called only one time
	sound = new Howl({ urls: ["music.mp3"] });

	$scope.init = function() {
	};
	
	$scope.play = function(){
		$scope.$introCover.fadeOut();
		// $scope.playAudio();
		// $scope.requestFullScreen();
	};
	
	$scope.playAudio = function() {
		sound.play();
	};

	$scope.requestFullScreen = function() {
		screenfull.request();
	};
}]);