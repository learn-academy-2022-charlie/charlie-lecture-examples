## Create a rails app
- $ rails new first_cars -d postgresql -T
- $ cd first_cars
- $ rails db:create
- $ rails s

## Generate a model
- $ rails generate model Cars make:string year:integer
- $ rails db:migrate

Go to db/schema
- Now the structure of the database looks like this
```ruby
  create_table "cars", force: :cascade do |t|
    t.string "make"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end
```

## Perform crud actions to place data entries into the database

Open the rails console
- $ rails c
Create an entry
> Car.create make:"Ford Mustang", year:1976

```ruby
#<Car:0x000000011b46c5c8                                   
 id: 1,                                                    
 make: "Ford Mustang",                                     
 year: 1976,                                               
 created_at: Fri, 10 Jun 2022 17:05:54.994910000 UTC +00:00,
 updated_at: Fri, 10 Jun 2022 17:05:54.994910000 UTC +00:00>
```

Each entry will have a unique identifier, a primary key.
`id: 1`

Read---display entries using active record queries
- Display all entries
> Car.all

```ruby
[#<Car:0x000000014c2b3458                                  
  id: 1,                                                   
  make: "Ford Mustang",                                    
  year: 1976,                                              
  created_at: Fri, 10 Jun 2022 17:05:54.994910000 UTC +00:00,
  updated_at: Fri, 10 Jun 2022 17:05:54.994910000 UTC +00:00>,
 #<Car:0x000000014c2b3318                                  
  id: 2,                                                   
  make: "Toyota Prius",                                    
  year: 2005,                                              
  created_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00,
  updated_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00>,
 #<Car:0x000000014c2b3200                                  
  id: 3,
  make: "Chevy S10",
  year: 1988,
  created_at: Fri, 10 Jun 2022 17:10:27.222418000 UTC +00:00,
  updated_at: Fri, 10 Jun 2022 17:10:27.222418000 UTC +00:00>] 
```
- Display one entry
> Car.find 2

```ruby
#<Car:0x00000001391ec1b8      
 id: 2,                       
 make: "Toyota Prius",        
 year: 2005,                  
 created_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00,
 updated_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00>
```

Update the data entries
- Use a variable to store the entry
> austin = Car.find 3

> austin.year = 1989

> austin.save

```ruby
#<Car:0x000000014c59a2c0                                      
 id: 3,                                                       
 make: "Chevy S10",                                           
 year: 1989,                                                  
 created_at: Fri, 10 Jun 2022 17:10:27.222418000 UTC +00:00,  
 updated_at: Fri, 10 Jun 2022 17:16:14.717887000 UTC +00:00>
```

Delete a data entry
- Use a variable to store the entry
> charlean = Car.find 1
> charlean.destroy

```ruby
[#<Car:0x0000000119087a40                                       
  id: 2,                                                        
  make: "Toyota Prius",                                    
  year: 2005,                                              
  created_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00,
  updated_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00>,
 #<Car:0x0000000119087978                                  
  id: 3,                                                   
  make: "Chevy S10",                                       
  year: 1989,                                              
  created_at: Fri, 10 Jun 2022 17:10:27.222418000 UTC +00:00,
  updated_at: Fri, 10 Jun 2022 17:16:14.717887000 UTC +00:00>]
```

To leave the rails console
> exit

## Do a migration
adding a new column
- $ rails generate migration add_column_gift_to_car

Update the migration file by placing a change definition `add_column :cars, :gift, :string` within the change method

```ruby
  def change
    add_column :cars, :gift, :string
  end
```

Run a rails command to update the database
- $ rails db:migrate

Schema should automatically update and look like the following

```ruby
  create_table "cars", force: :cascade do |t|
    t.string "make"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "gift"
  end
```

rename a column header
- $ rails generate migration change_name_of_make_to_model

Update the migration file by placing a change definition `rename_column :cars, :make, :model` within the change method

```ruby
  def change
    rename_column :cars, :make, :model
  end
```

Run a rails command to update the database
- $ rails db:migrate

Schema should automatically update and look like the following

```ruby
  create_table "cars", force: :cascade do |t|
    t.string "model"
    t.integer "year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "gift"
  end
```

All these changes does not change the data within our data entries, just the structure

- $ rails c
> Car.all

```ruby
[#<Car:0x00000001184a1870                                  
  id: 2,                                                   
  model: "Toyota Prius",                                   
  day: 2005,                                               
  created_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00,
  updated_at: Fri, 10 Jun 2022 17:09:00.695631000 UTC +00:00,
  gift: nil>,                                              
 #<Car:0x000000011854bfc8                                  
  id: 3,                                                   
  model: "Chevy S10",                                      
  day: 1989,                                               
  created_at: Fri, 10 Jun 2022 17:10:27.222418000 UTC +00:00,
  updated_at: Fri, 10 Jun 2022 17:16:14.717887000 UTC +00:00,
  gift: nil>] 
```

The new column we created is now a key with a `nil` value
