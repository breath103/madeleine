class MadeleinesController < ApplicationController
	layout false
	def index
		list = flickr.photos.getRecent
		
		@madeleine = {
			title: "제주도",
			cover_image: "http://th03.deviantart.net/fs70/PRE/i/2010/260/6/3/paris_alley_by_mitti707-d2xmsnl.jpg",
			resources: [
				{source: "/sample_images/IMG_0419.JPG"},
				{source: "/sample_images/IMG_0420.JPG"}
				# {source: "/sample_images/IMG_0421.JPG"},
				# {source: "/sample_images/IMG_0422.JPG"},
				# {source: "/sample_images/IMG_0423.JPG"},
				# {source: "/sample_images/IMG_0424.JPG"},
				# {source: "/sample_images/IMG_0425.JPG"},
				# {source: "/sample_images/IMG_0426.JPG"},
				# {source: "/sample_images/IMG_0427.JPG"},
				# {source: "/sample_images/IMG_0429.JPG"},
				# {source: "/sample_images/IMG_0431.jpg"},
				# {source: "/sample_images/IMG_0432.JPG"},
				# {source: "/sample_images/IMG_0434.jpg"},
				# {source: "/sample_images/IMG_0435.jpg"},
				# {source: "/sample_images/IMG_0436.jpg"},
				# {source: "/sample_images/IMG_0437.JPG"},
				# {source: "/sample_images/IMG_0439.JPG"},
				# {source: "/sample_images/IMG_0442.JPG"},
				# {source: "/sample_images/IMG_0443.JPG"},
				# {source: "/sample_images/IMG_0456.JPG"},
				# {source: "/sample_images/IMG_0457.JPG"},
				# {source: "/sample_images/IMG_0463.JPG"},
				# {source: "/sample_images/IMG_0464.JPG"}
				# {source: "https://farm8.staticflickr.com/7436/14090771616_3a86872bb2_b.jpg"}, 
				# {source: "https://farm6.staticflickr.com/5330/13927317058_fc25fe49dd_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7440/14113967685_16289b839b_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7361/14114321954_c7f852003c_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7321/14110868622_b2a18efb6e_b.jpg"}, 
				# {source: "https://farm6.staticflickr.com/5570/13927352480_337c56eb08_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7201/14110869532_376596d297_b.jpg"}, 
				# {source: "https://farm8.staticflickr.com/7317/14077312736_fa218db269_b.jpg"}, 
				# {source: "https://farm3.staticflickr.com/2902/13927258519_a81d3506ab_b.jpg"},
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
