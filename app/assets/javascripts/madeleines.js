var madeleine = {

};
var slidshow = {
	play: function(){
		madeleine.playAudio();
		setTimeout(function(){
			madeleine.requestFullScreen();
		},1000);
		$(".intro-cover").fadeOut();
	}
};
$(function(){
	var sound = new Howl({ urls: ["music.mp3"] });

	madeleine.requestFullScreen = function() {
		screenfull.request();
	};
});

madeleine = angular.module('madeleine', [])
	.directive('mOutlet', function() {
		console.log(arguments);
  	return {
			link: function(scope, element, attr) {
				outlet_name = "$" + attr['mOutlet'];
				scope[outlet_name] = $(element);				
			}  		
  	};
  })
	.controller('SlidshowCtrl', ['$scope', function($scope) {
		// shared

		sound = new Howl({ urls: ["music.mp3"] });
		$scope.init = function() {
		}
		$scope.play = function(){

			$scope.$introCover.fadeOut();
			$scope.playAudio();
			$scope.requestFullScreen();
		}
		$scope.playAudio = function() {
			sound.play();
		}
		$scope.requestFullScreen = function() {
			screenfull.request();
		}
	}]);