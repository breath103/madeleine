madeleine = angular.module('madeleine', []);
madeleine.directive('mOutlet', function() {
 	return {
		link: function(scope, element, attr) {
			outlet_name = "$" + attr['mOutlet'];
			scope[outlet_name] = $(element);				
		}  		
	};
});

$(function(){
	var notify = function () {
	  // Check for notification compatibility.
	  if (!'Notification' in window) {
	      // If the browser version is unsupported, remain silent.
	      return;
	  }
	  // Log current permission level
	  console.log(Notification.permission);
	  // If the user has not been asked to grant or deny notifications
	  // from this domain...
	  if (Notification.permission === 'default') {
	      Notification.requestPermission(function () {
	          // ...callback this function once a permission level has been set.
	          notify();
	      });
	  }
	  // If the user has granted permission for this domain to send notifications...
	  else if (Notification.permission === 'granted') {
	      var n = new Notification(
	                  'New message from Liz',
	                  {
	                    'body': 'Liz: "Hi there!"',
	                    // ...prevent duplicate notifications
	                    'tag' : 'unique string'
	                  }
	              );
	      // Remove the notification from Notification Center when clicked.
	      n.onclick = function () {
	          this.close();
	      };
	      // Callback function when the notification is closed.
	      n.onclose = function () {
	          console.log('Notification closed');
	      };
	  }
	  // If the user does not want notifications to come from this domain...
	  else if (Notification.permission === 'denied') {
	      // ...remain silent.
	      return;
	  }
	};
	notify();
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
		  	$scope.currentOrientation = window.orientation;
		  	$(window).scrollTop();
			}, 1000);
	  };
		changeCallback();
		window.addEventListener('orientationchange', changeCallback);

    $(window).focus(function() {
    	$scope.$mainDiv.removeClass("blured");
    });

    $(window).blur(function() {
    	$scope.$mainDiv.addClass("blured");
    });
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