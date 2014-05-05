source 'https://rubygems.org'
ruby '2.1.1'
gem 'rails', '3.2.17'
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end
gem 'jquery-rails'
gem 'bootstrap-sass'
gem 'cancan'
gem 'devise'
gem 'figaro'
gem 'pg'
gem 'rolify'
gem 'simple_form'
gem 'slim-rails'
gem 'flickraw'
gem 'awesome_print'
gem 'thin'

group :development do
  gem 'better_errors'
  gem 'binding_of_caller', :platforms=>[:mri_21]
  gem 'guard-bundler'
  gem 'guard-rails'
  gem 'guard-rspec'
  gem 'rails_layout'
  gem 'rb-fchange', :require=>false
  gem 'rb-fsevent', :require=>false
  gem 'rb-inotify', :require=>false
end

group :development, :test do
  gem 'factory_girl_rails'
  gem 'rspec-rails'
#  gem 'thin'
end

group :production do
#  gem 'thin'
end

group :test do
  gem 'capybara'
  gem 'database_cleaner', '1.0.1'
  gem 'email_spec'
end