# Ruby Blocks 6/2/22

# Data Sets
  # Ranges -  a ruby object that has a starting value and an ending value that creates a sequnce that spans the two values
  # range syntax is the ..

    # range_nums = 1..9
    # range_letters = 'a'..'z'


# Iteration - keep executing a set of actions until a certain condition is met 
  # While - a ruby keyword that initiates iteration as long as the condtion passed to it is true.
    # best practice is to use the while loop to update the values it is iterating on. 
    # this will create iteration in ruby where the code inside the while loop will be executed a number of times. 

    # create a ruby variable
     num = 1
    # creat while loop using while keyword and callin gon variable and creating a statemnt that will return a boolean value
    # while num < 10
    #   p num
    #   num = num + 1.5
    # end

    # less than or equal too
    # while num <= 10
    #   p num
    #   num = num + 1.5
    # end

    # the variable is larger than the expectation 
    # num = 20
    # while num <= 10
    #   p num
    #   num = num + 1.5
    # end

    # while with pi
    # while num <= 1000
    #   p num
    #   num = num + Math::PI
    # end
    
  # Until 
  # Retry
  # Redo
  # Next

# Blocks - is an anonymous function that we pass to a method. It modifies the methods behavior. 
  #  we write blocks using the keywords 'do' and 'end'

  # Each
    # the each method works on a list of items (arrays). each utelizes the length of the array to determine how many times it will iterate. 
    nums_array = [100000,654654,200000,2000001,1000000, 874584987987]
    
    # nums_array.each do
    #  p 'we gucci'
    # end

    # blocks can take arguments like value, index and array
      # when blocks are passed parameters they get a special syntax called pipes
        # pipes/ parameters are passed after the 'do' keyword and before any other code
    
    # nums_array.each do |value|
    #   p value
    #   p "that's a big number"
    # end

    range_nums = 1..20
    range_letters = 'a'..'z'
    range_letters_flipped = 'z'..'a'
    # range_nums.each do |value|
    #   p value
    # end

    #  replacing 'do/end' with {}
    # range_nums.each { |value| p value }

    # range_letters.each do |value|
    #   p value.upcase
    #   # p value
    #   # p index - ranges don't have indecies
    # end

    # range_nums.each do |value|
    #   if value % 2 != 0
    #     p 'its odd'
    #   else
    #     p value 
    #   end
    # end


  # Map - will iterate over a list of items and return to us a new array with the defined values

  # p range_nums.map do |value|
  #   # p value
  #    value
  #   end
#  array = range_nums.map do |value|
#             value
#           end

#   p array

  mult_arr = [1,2,3,4,5]

  # multiply = mult_arr.map do |value|
  #   value * 30
  # end

  # p multiply

#   def squared array
#     array.map do |value|
#       value ** 2
#     end
#   end

#  p squared mult_arr

  # Select - It has a built in if/else statement that looks for a Boolean return 
   words = ['hey', 'yo', 'sup', 'hello', 'gang gang', 'gucci']

   def find_e array
      array.select do |value|
        value.include? 'e'
      end
   end

  p find_e words
  # Times