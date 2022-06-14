# Routes Views Controllers Params 6/14/22

[Syllabus Routes Views Controllers Params](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/controllers-routes-views.md)

1. Views
2. Routes
3. Controllers
4. Params 

# Overview 
  - Understand of the Rails app anatomy 
  - Understating the routes rails uses and their different parts
    - URL
    - controller name
    - method name
  - Generate command for controller
  - Learn to create views using ERB
  - Pass params to those views to make them dynamic and have relevant information show up on screen
  

 $ rails new food_app -d postgresql -T -G
 $ rails db:create
 $ rails server || rails s

 ## HTTP Verbs
 - Post
 - Get
 - Put
 - Patch
 - Delete

 ## CRUD Actions
 - Create
 - Read 
 - Update
 - Delete

# Controller
  ## Generate a Controller 
  $ rails g controller Food

    create  app/controllers/food_controller.rb
    invoke  erb
    create    app/views/food
    invoke  helper
    create    app/helpers/food_helper.rb


food_controller.rb
```ruby
  def tacos
    render html: "Hello World, Austin loves Torchy's Tacos"
  end
```

To access this method in the class of food we need an appropriate routes 

```Ruby
  get '/tacos' => 'food#tacos'
  get '/jenner' => 'food#sushi'
```
# Overview #1
1. made an app
2. created a db
3. generated a controller
  - $ rails g controller Name
4. set up our controller with a couple methods
5. render keyword
6. Set up our routes using route syntax
  - http verb
  - route name
  - hash rocket
  - controller name
  - #
  - method name


# Views 
  
  (Today) We make our views the old fashion way. 
  /app/views/food
  - create a new file called 
    - method_name.html.erb
    > tacos.html.erb

  ## Embedded Ruby
Embeded ruby tag
  - <% %>
  - Allows us to write ruby code inside of the HTML file
```ruby
  <ul>
    <% @ingredients.each do |value|%>
      <li> <%= value %> </li>
    <% end %>`
  </ul>
```

### Rooting a route
root 'food#home'

### Linking a different view
<%= link_to 'Jenner', '/jenner' %>
<%= link_to 'Home', '/'%>

# Overview #2
1. made an app
2. created a db
3. generated a controller
  - $ rails g controller Name
4. set up our controller with a couple methods
5. render keyword
6. Set up our routes using route syntax
  - http verb
  - route name
  - hash rocket
  - controller name
  - #
  - method name
7. Made a new file using method_name.html.erb
  - inside the views file named for our controller
8. Sync'd up our views, controller, and routes
9. Rooted one of our routes called home
10. Used instance variables to transmit data to our views
11. mapped over our instance variable to display it's data
12. linked our views together


# Params
 - params allow us to take information form the user / user experiance and pass it to our application
```Ruby
  def cheese_cake
    @flavor = 'Pumpkin Pie'
  end
```
 - Params uses the special rails method --> params[]
 - Params always takes a symbol as an argument
  - the symbol can be anything we want ans long as it is consistent with the route of the same name

`get '/davon/:flavor' => 'food#cheese_cake'`

```Ruby
  def cheese_cake
    @flavor = params[:flavor]
  end
```
Our response from the server is a ruby hash
Params hash 
Parameters: {"flavor"=>"Ivan"}
Parameters: {"flavor"=>"Charlie"}
Parameters: {"ingredient1"=>"whiskey", "ingredient2"=>"queso"}


# Overview 3
1. made an app
2. created a db
3. generated a controller
  - $ rails g controller Name
4. set up our controller with a couple methods
5. render keyword
6. Set up our routes using route syntax
  - http verb
  - route name
  - hash rocket
  - controller name
  - #
  - method name
7. Made a new file using 
  `method_name.html.erb`
  - inside the views folder named for our controller
8. Sync'd up our views, controller, and routes
  - Using rails magic
9. Rooted one of our routes called home
10. Used instance variables to transmit data to our views
11. mapped over our instance variable to display it's data
12. linked our views together
13. we bounced back and fourth between screens like crazy
14. we set up params and used them with instance variables to accept & display dynamic data 
15. we did a little bit of logic in our methods
16. We created multiple params by listing them out as individual variables
17. we learned that all params are keys and values in hashes
  - Param values are always strings
