# Ruby on Rails 6/9/22
- A collection of Gems built in the ruby language as a framework
- DHH, Full Stack Applications Quickly
  - "Look at all the things I am NOT doing" - DHH Ruby conference '04
- MVC Architecture -- MODEL VIEW CONTROLLER
  - Model: Memory, money maker, business center of our app, and handles the logic of our database(s), as well the relationship between our database tables.
  - View: What a person actually sees, interacts with, and hands information too
  - Controller: Brains, decision maker of our application - handles people friendly URL's, requests and responses of tha application

- A user to see something, input data, have that data saved for future reference , retrieve that data, or process the data and interact with it again: A Full Stack Application.

# Getting set up with Rails

$ rails new 
  -> Name of the app (snake case, singular)
  -> What database we want to use
  -> What we want to do with our testing environment (we'll dropping it)
 
 $ rails new rails_intro -d postgresql -T

 - Rails is Opinionated 
  - Rails has a way of doing things and it doesn't want you to mess with how it gets things done
  - it is SUPER picky.
- "Convention over Configuration" 

$ rails db:create

Running via Spring preloader in process 99135
Created database 'rails_intro_development'
Created database 'rails_intro_test'

$ rails server