# Create rails app
- $ rails new binge_worthy -d postgresql -T
- $ cd binge_worthy
- $ rails db:create
- $ rails s

## Create model
- $ rails g model Show name:string channel:string

> Show.create name:"MASH", channel:"HULU"

## Make entries
- $ rails c
#### Note: If using where method, it changes the datatype to an array
> witcher = Show.where name:"Witcher"
```ruby
[#<Show:0x000000010a103a50                                            
  id: 4,                                                              
  name: "Witcher",                                     
  channel: "Netflix",                                  
  created_at: Mon, 13 Jun 2022 16:54:25.602466000 UTC +00:00,
  updated_at: Mon, 13 Jun 2022 16:54:25.602466000 UTC +00:00>]
```
Reference the value then use update method and pass key:value pairs that will change
> witcher[0].update name:"Outlander", channel:"Netflix"


## Build a relationship
- $ rails g model Description name:string genre:string duration_in_min:integer show_id:integer

### place associations in app/models
- belongs_to will be with the model that has foreign key
- has_many on the main table

## Create entries
> mash.descriptions.create name:"Mash", genre:"comedy, military drama", duration_in_min:30

To see all the descriptions related to this active record query
> mash.descriptions

## Removing columns
- Relational databases involve connecting a collection of data by establishing relationships between them. It is not necessary to have the same columns in each table. For instance, the name column is not necessary on the Description table because it is included in the Show table. The foreign key joins the data together.

- Generate a migration
- $ rails g migration remove_column_name

- Change definition on the migration file
```ruby
  remove_column :descriptions, :name
```

- Migrate command
- $ rails db:migrate