# Ruby Methods

# "def" is a keyword in Ruby
# Every "def" needs a corresponding "end"

def greeter
  'Hello world!'
end

p greeter

# Implicit return - Ruby automatically returns the last line of every method

#________________________

# Methods with Arguments
  # Ruby allows parenthesis, or no parenthesis for params and arguements

# def greeter(name)
#   "Hello #{name}!"
# end

# p greeter('Austin')


def greeter name
  "Hello #{name}!"
end

p greeter 'Austin'

#________________________


# Multiple Arguements

# def multiply num1, num2
#   num1 * num2
# end

# p multiply 3, 7


def multiply(num1, num2)
  num1 * num2
end

p multiply(3, 7)
p multiply(5, 10)
p multiply(33, 8)
p multiply(6, 9)
p multiply(12, 3)

#________________________

# Methods with Conditional Logic

  # Every 'def' needs an 'end'
  # Every 'if' needs an 'end'
  # Two different ends means two different execution layers of code

def greater_num(num1, num2)
  if num1 > num2
    "#{num1} is greater."
  elsif num1 < num2
    "#{num2} is greater."
  else
    "#{num1} and #{num2} are the same."
  end
end

p greater_num(27, 22)
p greater_num(20, 22)
p greater_num(22, 22)

#________________________

puts 'Please enter your name'
user_name = gets.chomp
p user_name
puts 'Please enter your age'
user_age = gets.chomp.to_i
p user_age

def can_you_vote(name, age)
  if age >= 18
    "Hi #{name}!  #{age} is old enough to vote."
  else
    "Hi #{name}!  #{age} is not old enough to vote."
  end
end

p can_you_vote(user_name, user_age)