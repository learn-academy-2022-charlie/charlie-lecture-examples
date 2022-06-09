Databases and Postgres 6/8/22

```ruby
class LearnStudent
  def initialize name_param, pets_param, pet_names_param, hobbies_param, hobbies_desc_param
    @name = name_param 	
    @pets = pets_param
    @pet_names = pet_names_param
    @hobbies = hobbies_param
    @hobbie_descriptions = hobbies_desc_param
  end
end

nic = LearnStudent.new('Nic',	true,	['nugget'],	'gym',	'i like lifting weights')
#<LearnStudent:0x00007fd4600ecfe0 @name="Nic", @pets=true, @pet_names=["nugget"], @hobbies="gym", @hobbie_descriptions="i like lifting weights">

# 18 Nic'	TRUE	['nugget']	gym'	'i like lifting weights'

```

# SQL - Structured Query Language  
  ## PostgreSQL - Postrges 
    - Strongly Object Oriented 
      - Reddit
      - Instagram
      - Spotify
      - International Space Station

# PSQL version and listing of databases 
$ psql --version
$ psql
> \l - lists all the dbs

# PGAdmin 
   - user interface for making queries to a postgres database 
  comp Password - SDlearn123
  click on the side menu until you get to countries

# Query 
 - a request for data from a database
 - a request for an action from a database
 - both

 ## Select / From
 - The most basic query 
 - SELECT tells us what datasets / column headers
 - and FROM tells us which table/ model/ class that data is coming from
 - Select takes the argument of the column headers that we want to see
 - From takes the argument of the table those column headers are a  part of
 - Select can also take the * operator to denote all the column headers

    ```sql
    SELECT name
    FROM country
    ```

    ```sql
    SELECT lifeexpectancy, name
    FROM country
    ```
 # Limit
  - Limit: limits the number of the first returned instances from the database
  - Limit only accepts numbers as an argument
    ```sql
    SELECT lifeexpectancy, name
    FROM country
    LIMIT 5
    ```

  # Where
  - WHERE allows us to filter out data that does not match the argument passed to WHERE

  ```sql
  SELECT *
  FROM country
  WHERE indepyear > 1990


  SELECT name, governmentform
  FROM country
  WHERE governmentform = 'Monarchy'
  ```

  # Like
  - Like looks for pieces of data or data sets that activate a boolean condition
  - like can use the wildcard operator
  - wildcard % 

 ```sql
  SELECT name, region
  FROM country
  WHERE region
  LIKE '%merica'
  ```
   ```sql
  SELECT name, region
  FROM country
  WHERE region
  LIKE '%l America'
  ```

  # Order By
  - Returns to us a instance in the database according to the order of the argument passed to the order by
  ```sql
  SELECT name, lifeexpectancy
  FROM country
  ORDER BY lifeexpectancy


  SELECT name, lifeexpectancy, gnp
  FROM country
  ORDER BY gnp DESC
  ```

# As
- AS creates an alias coulnm header that we can use for other queries 

  ```sql
  SELECT name, surfacearea, population,
  WHERE population != 0
  population/surfacearea as population_density
  FROM country
  ```
