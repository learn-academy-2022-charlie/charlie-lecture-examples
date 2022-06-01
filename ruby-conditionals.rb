# Conditional statements - decision trees, if/else statements

# "if" - keyword that takes in an evaluation without ()
# every "if" needs an "end", only one for each conditional statement
# wrestler = 'Dewayne The Rock Johnson'

# if wrestler == 'Dewayne The Rock Johnson'
#   p 'The Rock has amazing control over his eyebrows.'
# end

# Output: "The Rock has amazing control over his eyebrows."

# wrestler = 'Stone Cold Steve Austin'

# if wrestler == 'Dewayne The Rock Johnson'
#   p 'The Rock has amazing control over his eyebrows.'
# end

# Output: No output because there is not an evaluation to cover it

# "else" - keyword that covers all other possible conditions, default code block, does not take an evaluation, only one for each conditional statement
# wrestler = 'Stone Cold Steve Austin'

# if wrestler == 'Dewayne The Rock Johnson'
#   p 'The Rock has amazing control over his eyebrows.'
# else 
#   p 'Yeah, you are snarky, but can you smell what the Rock is cooking?'
# end

# Output: "Yeah, you are snarky, but can you smell what the Rock is cooking?"


# "elsif" keyword that takes an evaluation, you can have as many as necessary for your conditional statement

# wrestler = 'Macho Man Randy Savage'

# if wrestler == 'Dewayne The Rock Johnson'
#   p 'The Rock has amazing control over his eyebrows.'
# elsif wrestler == 'Macho Man Randy Savage'
#   p 'The tower of power! Too sweet to be sour, ohhh yeahh!'
# else 
#   p 'Yeah, you are snarky, but can you smell what the Rock is cooking?'
# end

# Output: "The tower of power! Too sweet to be sour, ohhh yeahh!"

# String interpolation
# " #{variable-name}"

# my_name = "Ric Flair"

# if my_name == "Ric Flair"
#   p 'WOOOOO, I have a great robe'
# else
#   p "Hello, #{my_name}, do you know Ric Flair?" 
# end

# Output: "WOOOOO, I have a great robe"

# my_name = "Triple H"

# if my_name == "Ric Flair"
#   p 'WOOOOO, I have a great robe'
# else
#   p "Hello, #{my_name}, do you know Ric Flair?" 
# end

# Output: "Hello, Triple H, do you know Ric Flair?"

# "gets" - keyword will stop the program and wait for a user to type something into the terminal
# my_name = gets
# p "#{my_name}, would you like to be a wrestler?"

# Output: "Justin Bieber\n, would you like to be a wrestler?"

# ".chomp" - removes any non-string characters

# my_name = gets.chomp
# p "#{my_name}, would you like to be a wrestler?"
# Output:"Justin Bieber, would you like to be a wrestler?"

# p 'What is your name?'
# my_name = gets.chomp
# p "#{my_name}, would you like to be a wrestler?"

# my_year = gets.chomp
# p my_year.class

# # Output: String

# Nested conditonals
# if my_year.even?
#   p "You will wear a robe and huge glittery glasses in the shape of #{my_year}."
# end

# Change the class from string to integer to use the .even method

p 'What is your birth year?'
my_year = gets.chomp.to_i

# Output: String

if my_year.even?
  p "You will wear a robe and huge glittery glasses in the shape of #{my_year}."
  if my_year > 1996
    p 'Your name will be The Great <last meal you ate>'
  else
    p 'Your name will be The Top-Shelf <last beverage you had>'
  end  
end
