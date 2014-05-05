require 'flickraw'

class MadeleinesController < ApplicationController
	layout false
	def index
		list = flickr.photos.getRecent
		
		@madeleine = {
			title: "Paris",
			cover_image: "http://th03.deviantart.net/fs70/PRE/i/2010/260/6/3/paris_alley_by_mitti707-d2xmsnl.jpg",
			resources: [
				{source: "https://farm8.staticflickr.com/7436/14090771616_3a86872bb2_b.jpg"}, 
				{source: "https://farm3.staticflickr.com/2908/14114344934_0bd3d903cf_b.jpg"}, 
				{source: "https://farm8.staticflickr.com/7059/14114310434_b00f0f9f97_b.jpg"}, 
				{source: "https://farm8.staticflickr.com/7347/14114301244_cf4211a714_b.jpg"}, 
				{source: "https://farm6.staticflickr.com/5330/13927317058_fc25fe49dd_b.jpg"}, 
				{source: "https://farm8.staticflickr.com/7440/14113967685_16289b839b_b.jpg"}, 
				{source: "https://farm8.staticflickr.com/7361/14114321954_c7f852003c_b.jpg"}, 
				{source: "https://farm8.staticflickr.com/7321/14110868622_b2a18efb6e_b.jpg"}, 
				{source: "https://farm6.staticflickr.com/5570/13927352480_337c56eb08_b.jpg"}, 
				{source: "https://farm8.staticflickr.com/7201/14110869532_376596d297_b.jpg"}, 
				{source: "https://farm8.staticflickr.com/7317/14077312736_fa218db269_b.jpg"}, 
				{source: "https://farm3.staticflickr.com/2902/13927258519_a81d3506ab_b.jpg"}
				# {source: "https://farm6.staticflickr.com/5234/14114341024_84de229006_b.jpg"}, 
				# {source: "https://farm6.staticflickr.com/5274/13927367698_04b93375f5_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7348/14110680471_40264aacf0_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7403/14110629281_68dee13cb2_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7395/14110669271_3f41a8f5e9_b.jpg"}, 
				# {source: "https://farm3.staticflickr.com/2913/14114347054_daaa5a3356_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7339/14114374984_434ec693e9_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7389/13927279487_3755f42333_b.jpg"}, 
				# {source: "https://farm3.staticflickr.com/2922/13917595039_7ae1321f6a_b.jpg"}, 
				# {source: "http://th03.deviantart.net/fs70/PRE/i/2010/260/6/3/paris_alley_by_mitti707-d2xmsnl.jpg"},
				# {source: "http://24.media.tumblr.com/tumblr_m8yn6xyvmh1rdslvho1_1280.jpg"},
				# {source: "http://www.lacasapark.com/la/wp-content/uploads/2010/03/IMG_0559-1024x768.jpg"},
				# {source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQYpX9pF1JGJj7hP9ogKM_TNQL7I1pNkv1w7u5dp2Ixj8o9JI2"},
				# {source: "http://pgoh13.com/paris_passagebrady.jpg"},
				# {source: "http://wallpaper-million.com/Wallpapers/f/Photography/Alley-in-the-park-at-night-wallpaper_5203.jpg"},
				# {source: "http://menzphotography.com/wp-content/uploads/galleries/post-7/full/Alley%20Ways_0588.JPG"},
				# {source: "http://trippingovertheworld.files.wordpress.com/2010/08/dscn3083.jpg"},
				# {source: "http://fc09.deviantart.net/fs12/i/2006/282/b/7/An_Alley_in_Paris_by_anticide.jpg"},
				# {source: "http://upload.wikimedia.org/wikipedia/commons/6/64/Place_Vosges_Paris_Mai_2006_011.jpg"},
				# {source: "http://heleddr.files.wordpress.com/2011/05/2.jpg"},
				# {source: "http://2.bp.blogspot.com/_RkdN7kEoRcE/TP57Yj1zQeI/AAAAAAAAIjo/hK_xAwbbJgw/s1600/montmartre8.jpg"}
			]
		}
	end
end
