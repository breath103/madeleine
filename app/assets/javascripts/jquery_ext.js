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
				top: (super_bounds.height - bounds.height * 0.7) / 2
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