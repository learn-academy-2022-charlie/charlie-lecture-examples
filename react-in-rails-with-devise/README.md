# Rails set up commands list
$ rails new react-in-rails-with-devise -d postgresql -T
$ cd react-in-rails-with-devise
$ rails db:create
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ rails generate controller Home
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ rails s 
  - Everything looks good!

config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
# Find this line:
config.sign_out_via = :delete
# And replace it with this:
config.sign_out_via = :get

$ bundle add bootstrap
$ mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
$ yarn add reactstrap

$ rails s
$ ./bin/webpack-dev-server