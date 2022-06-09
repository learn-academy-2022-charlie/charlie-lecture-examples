# Active Record 6/9/22
  - Active Record is a gem
  - ORM (Object Relational Mapping)
  - To write DB queries in Ruby like methods
  - A layer that exists around the Database handling all the requests and responses to and from the DB
  - AR (Active Record) maps ruby objects to rows in the database
  - Ruby is VERY OOP // Active Record following that style of data creation and representation using tables and rows. 
  - AR gives us a primary key for every instance in our database  
  - AR allows us to treat our DB tables as if they were Ruby Classes
    - Our tables can have relationships to one another like ruby classes do
  
- Our empty database needs some structure and the ability to take in and save info

# Rails Generate Commands

1.) Generate Commands
2.) Active Record Data Types

To make a table / model in our database, an AR class

> $ rails generate model

 -> the name of the model
  - PasalCase and singular
 -> the names of column_headers and their data types
 
> $ rails generate model Schedule 

  - dates - :date
  - times - :time
  - location 
    - lat - :float
    - lng - :float
  - day - :string 
  - title / event - :string
  - tasks - :text

[rails 6 activerecord data types](https://michaelsoolee.com/rails-activerecord-data-types/)

> $ rails generate model Schedule day:string date:date event:string

      invoke  active_record
      create    db/migrate/20220609223730_create_schedules.rb
      create    app/models/schedule.rb

> $ rails db:migrate
== 20220609223730 CreateSchedules: migrating ==================================
-- create_table(:schedules)
   -> 0.0251s
== 20220609223730 CreateSchedules: migrated (0.0252s) =========================


# Rails Console
 - The space where developers can interact with Active Record and AR can write queries for us to interact with the database. 
> $ rails console
  OR
> $ rails c

  ## Read 
  - .all

  ```ruby
  3.0.0 :001 > Schedule.all
    Schedule Load (0.8ms)  SELECT "schedules".* FROM "schedules"
  => []     
  ```
  - .first
    - returns the first entry

  - .last
    - returns the last entry in the database

  - .second
  - .third 



  ## Create
  - in order to create instances of our database we use the Active Record method ".create" with all of the column headers and values we want to use
  - if we forget a value 'nil' will be substituted

  > Schedule.create 
    -> takes arguments of each column_header
    -> each column header gets a value that is the data type associated with it in the schema
    -> each argument gets a comma between itself and the next argument
  
  When done correctly the object will be injected into the database and given a primary_key

```ruby 

  3.0.0 :002 > Schedule.create day:'Thursday', date:Date.today
    TRANSACTION (0.2ms)  BEGIN
    Schedule Create (6.5ms)  INSERT INTO "schedules" ("day", "date", "event", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["day", "Thursday"], ["date", "2022-06-09"], ["event", nil], ["created_at", "2022-06-09 22:52:44.873466"], ["updated_at", "2022-06-09 22:52:44.873466"]]                                       
    TRANSACTION (2.0ms)  COMMIT                                                                                   
  =>                                                                                                             
  #<Schedule:0x00007f9d84183b88                                                                            
  id: 1,                                                                                                       
  day: "Thursday",                                                                                              
  date: Thu, 09 Jun  2022,
  event: nil            ,                                                                                     
  created_at: Thu, 09 Jun 2022 22:52:44.873466000 UTC +00:00,
  updated_at: Thu, 09 Jun 2022 22:52:44.873466000 UTC +00:00> 
  ```
  ```ruby
  3.0.0 :003 > Schedule.create day:'Thursday', date:Date.today + 7, event:'walking dog'
  TRANSACTION (0.2ms)  BEGIN
  Schedule Create (0.4ms)  INSERT INTO "schedules" ("day", "date", "event", "created_at", "updated_at") VALUES ($1, $2, $3, $4, $5) RETURNING "id"  [["day", "Thursday"], ["date", "2022-06-16"], ["event", "walking dog"], ["created_at", "2022-06-09 22:59:48.036757"], ["updated_at", "2022-06-09 22:59:48.036757"]]                             
  TRANSACTION (4.4ms)  COMMIT                                                                                   
 =>                                                                                                             
#<Schedule:0x00007f9d848f73d8                                                                                   
 id: 2,                                                                                                         
 day: "Thursday",                                                                                               
 date: Thu, 16 Jun 2022,                                                                                        
 event: "walking dog",                                                                                          
 created_at: Thu, 09 Jun 2022 22:59:48.036757000 UTC +00:00,                                                    
 updated_at: Thu, 09 Jun 2022 22:59:48.036757000 UTC +00:00>  
 ```

 ## Find
  The active record method ".find" takes an argument of an id and returns only that instance of the database as an object.

```ruby
3.0.0 :003 > Schedule.find 5
  Schedule Load (0.5ms)  SELECT "schedules".* FROM "schedules" WHERE "schedules"."id" = $1 LIMIT $2  [["id", 5], ["LIMIT", 1]]                                                    
 =>                                                             
#<Schedule:0x00007f7ef08adf10                                   
 id: 5,                                                         
 day: "Tuesday",                                                
 date: Sun, 21 Jun 0022,                                        
 event: "PD Week Starts",                                       
 created_at: Thu, 09 Jun 2022 23:04:53.612027000 UTC +00:00,    
 updated_at: Thu, 09 Jun 2022 23:04:53.612027000 UTC +00:00>    
```

  When find can't find an instance with the same ID

```ruby
3.0.0 :004 > Schedule.find 7
  Schedule Load (0.7ms)  SELECT "schedules".* FROM "schedules" WHERE "schedules"."id" = $1 LIMIT $2  [["id", 7], ["LIMIT", 1]]                                                    
/Users/learnacademy/.rvm/gems/ruby-3.0.0/gems/activerecord-7.0.3/lib/active_record/core.rb:284:in `find': Couldn't find Schedule with 'id'=7 (ActiveRecord::RecordNotFound)       
```

We can save variables in the console by assigning them to the AR methods 

```ruby
3.0.0 :011 > free_time = Schedule.find 3
  Schedule Load (0.9ms)  SELECT "schedules".* FROM "schedules" WHERE "schedules"."id" = $1 LIMIT $2  [["id", 3], ["LIMIT", 1]]                                                                
 =>                                                                         
#<Schedule:0x00007f7eef9c0d40                                               
...                                                                         
3.0.0 :012 > free_time
 => 
#<Schedule:0x00007f7eef9c0d40                                               
 id: 3,                                                                     
 day: "Friday",                                                             
 date: Fri, 10 Jun 2022,                                                    
 event: "Assessment",                                                       
 created_at: Thu, 09 Jun 2022 23:02:26.126767000 UTC +00:00,                
 updated_at: Thu, 09 Jun 2022 23:02:26.126767000 UTC +00:00>  
```

  ## Where
  .where is an AR method that always returns to us an array -- even if there is only one item that matches it. We can assign the .where to a variable and use index notation on tha variable to access instance from the database. 

```ruby
  3.0.0 :014 > thorsday = Schedule.where(day: 'Thursday')
[#<Schedule:0x00007f7eeec5fe58
  id: 1,               
  day: "Thursday",     
  date: Thu, 09 Jun 2022,
  event: nil,          
  created_at: Thu, 09 Jun 2022 22:52:44.873466000 UTC +00:00,
  updated_at: Thu, 09 Jun 2022 22:52:44.873466000 UTC +00:00>,
  #<Schedule:0x00007f7eeec5fd90
    id: 2,               
    day: "Thursday",     
    date: Thu, 16 Jun 2022,
    event: "walking dog",
    created_at: Thu, 09 Jun 2022 22:59:48.036757000 UTC +00:00,
    updated_at: Thu, 09 Jun 2022 22:59:48.036757000 UTC +00:00>] 


 ```

 ## Update
  Update Requires us to create a pointer / variable that we can then call the updat emethod on. We create this variable just like we would with ruby. 

  `variable_name = Table.find 1`

  `variable_name.update ...`


```ruby
  3.0.0 :023 > needs_name = Schedule.first
  3.0.0 :023 > needs_name.update day:'Thursday', date:Date.today, event:'AR lecture'
  Schedule.first
  #<Schedule:0x00007f7eeca71878                                                             
    id: 1,                                                                                   
    day: "Thursday",                                                                         
    date: Thu, 09 Jun 2022,                                                                  
    event: "AR lecture",                                                                     
    created_at: Thu, 09 Jun 2022 22:52:44.873466000 UTC +00:00,                              
    updated_at: Thu, 09 Jun 2022 23:27:30.631656000 UTC +00:00>  
 ```
  ## Delete
 Delete is a bit like update. We must target a particular item  by creating a pointer or variable so we know what it is we are intending to delete.

  `variable_name = Table.find 1`

  `variable_name.delete`

  ```ruby
  3.0.0 :028 > some_variable.delete
  =>
  #<Schedule:0x00007f7eec70ac20                          
 id: 1,                                                
 day: "Thursday",
 date: Thu, 09 Jun 2022,
 event: "AR lecture",
 created_at: Thu, 09 Jun 2022 22:52:44.873466000 UTC +00:00,
 updated_at: Thu, 09 Jun 2022 23:27:30.631656000 UTC +00:00> 
 ```

 # Summary
- Active Record lays over the top of your database to be the layer between Rails and Postgres
- Active Record allows you to interact with the database like a class
- Underneath Active Record are just SQL queries
- We can perform all the CRUD actions on Active Record entries
- Just like Ruby, Active Record has a lot of query methods so it is worth googling the action you want to perform