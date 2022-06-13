Active Record Validations 6/13/22


# Whats the point? 
  - TDD 
    - RED, GREEN, REFACTOR
    - Coding for use case scenarios
    - Given certain inputs we know we will get appropriate outputs
    - Features work appropriately 
    - Reduce bugs
  - Validations
    - Ensure that only the data we as the developer want saved in our databases gets saved in our dataases. 
  - Specs
    - Specifications
    - The tell other developers what kind ofg information we are looking for
    
# What is a validation? 
  - A validation is a rails method that can be set up in  a number of different ways depending on the arguments passed to it
  - The job of validation is to reject improper data and to send back an error code 
  - the error code can be found on the object being passed to active record by calling on the object's errors with the relevant key notation.  
   
   `p object.errors[:relevant_key]`

  - We write validations in app/models/blog.rb as

    ```ruby
    class Blog < ApplicationRecord
      validates :title, :author, :content, presence: true  
      validates :content, length: { minimum: 100 }
    end
    ```



# Whats a spec and how do I make one? 
 $ bundle add rspec-rails
 $ rails generate rspec:install
 $ rails g model Blog author:string title:string content:text simple_date:date
 $ rails db:migrate     

  Look for 
  > invoke rspec
  > create spec/models/blog_spec.rb

  Inside of our blog_spec file we can write our tests. 

```ruby
require 'rails_helper'

RSpec.describe Blog, type: :model do
  describe 'Blog Model' do
    it 'throws an error if presence of title is not true' do

      blog_post = Blog.create author:"someone", title: nil, content: "Whoa I can't believe it's not butter"

      p blog_post.errors[:title]

      expect(blog_post.errors[:title]).to_not be_empty
    end
  end
end
```

Each test after this should be contained in an 'it' statement that has to do with our validations. 

to run the tests we use the command

 $ rspec spec/models/blog_spec.rb 

 Always use RED, GREEN, REFACTOR