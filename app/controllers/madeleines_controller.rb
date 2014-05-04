class MadeleinesController < ApplicationController
	layout false
	def index
		@madeleine = {
			title: "Paris",
			cover_image: "http://th03.deviantart.net/fs70/PRE/i/2010/260/6/3/paris_alley_by_mitti707-d2xmsnl.jpg",
			resources: [
				{source: "http://th03.deviantart.net/fs70/PRE/i/2010/260/6/3/paris_alley_by_mitti707-d2xmsnl.jpg"},
				{source: "http://24.media.tumblr.com/tumblr_m8yn6xyvmh1rdslvho1_1280.jpg"},
				{source: "http://www.lacasapark.com/la/wp-content/uploads/2010/03/IMG_0559-1024x768.jpg"},
				{source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYpX9pF1JGJj7hP9ogKM_TNQL7I1pNkv1w7u5dp2Ixj8o9JI2"},
				{source: "http://pgoh13.com/paris_passagebrady.jpg"},
				{source: "http://wallpaper-million.com/Wallpapers/f/Photography/Alley-in-the-park-at-night-wallpaper_5203.jpg"},
				{source: "http://menzphotography.com/wp-content/uploads/galleries/post-7/full/Alley%20Ways_0588.JPG"},
				{source: "http://trippingovertheworld.files.wordpress.com/2010/08/dscn3083.jpg"},
				{source: "http://fc09.deviantart.net/fs12/i/2006/282/b/7/An_Alley_in_Paris_by_anticide.jpg"},
				{source: "http://upload.wikimedia.org/wikipedia/commons/6/64/Place_Vosges_Paris_Mai_2006_011.jpg"},
				{source: "http://heleddr.files.wordpress.com/2011/05/2.jpg"},
				{source: "http://2.bp.blogspot.com/_RkdN7kEoRcE/TP57Yj1zQeI/AAAAAAAAIjo/hK_xAwbbJgw/s1600/montmartre8.jpg"}
			]
		}
	end
end
