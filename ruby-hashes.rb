# Ruby hashes - a collection of key:value pairs

# How to create a ruby hash
# Two methods
# 1 - shorthand method (newer method)
walker_island = {
  prime_minister: 'Nicole', 
  hammock_director: 'Charlean', 
  pit_master: 'Michael', 
  security: 'Lance', 
  band: 'Sean', 
  coconut_overseer: 'Jorge', 
  bunker_lord: 'Don', 
  chief_chiller: 'Austin'
}

# p walker_island

# Output: 

# {:prime_minister=>"Nicole", :hammock_director=>"Charlean", :pit_master=>"Michael", :security=>"Lance", :band=>"Sean", :coconut_overseer=>"Jorge", :bunker_lord=>"Don", :chief_chiller=>"Austin"}

# Hash rocket => separates the keys and values

# 2nd method: ruby "new" method
charlie_bbq = Hash.new
# p charlie_bbq

# Output: {}

# CRUD actions - different ways to manipulate the data

# Create content
# Read content
# Update content
# Delete content

# Create content
charlie_bbq[:macncheese] = 'Davon'
charlie_bbq[:smoked_ribs] = 'Stephen'
charlie_bbq[:collard_greens] = 'Lance'
charlie_bbq[:lumpia] = 'Michael'
charlie_bbq[:smoked_salmon] = 'Damien'
charlie_bbq[:pulled_pork] = 'Collin'
charlie_bbq[:brisket] = 'Don'

walker_island[:umbrella_chief] = 'Damien'

# Read or display content
# displays all key:value pairs in the hash
# p charlie_bbq

# Output: {:macncheese=>"Davon", :smoked_ribs=>"Stephen", :collard_greens=>"Lance", :lumpia=>"Michael", :smoked_salmon=>"Damien", :pulled_pork=>"Collin", :brisket=>"Don"}

# p walker_island

# Output: {:prime_minister=>"Nicole", :hammock_director=>"Charlean", :pit_master=>"Michael", :security=>"Lance", :band=>"Sean", :coconut_overseer=>"Jorge", :bunker_lord=>"Don", :chief_chiller=>"Austin", :umbrella_chief=>"Damien"}

# display one value, bracket notation referencing the key
# p charlie_bbq[:lumpia]

# Output: "Michael"

# display one key
# p charlie_bbq.key("Michael")

# Output: :lumpia


# Update or edit content, bracket notation referencing the key
charlie_bbq[:pulled_pork] = 'Charlean'
# p charlie_bbq

# Output: {:macncheese=>"Davon", :smoked_ribs=>"Stephen", :collard_greens=>"Lance", :lumpia=>"Michael", :smoked_salmon=>"Damien", :pulled_pork=>"Charlean", :brisket=>"Don"}

# Delete content   .delete()
walker_island.delete(:bunker_lord)
# p walker_island

# Output: {:prime_minister=>"Nicole", :hammock_director=>"Charlean", :pit_master=>"Michael", :security=>"Lance", :band=>"Sean", :coconut_overseer=>"Jorge", :chief_chiller=>"Austin", :umbrella_chief=>"Damien"}

walker_island.delete(:hammock_director)
# p walker_island

# Output: {:prime_minister=>"Nicole", :pit_master=>"Michael", :security=>"Lance", :band=>"Sean", :coconut_overseer=>"Jorge", :chief_chiller=>"Austin", :umbrella_chief=>"Damien"}

# Modules - grouping like things that have similar properties
# Enumerable modules - iterable, for instance, hashes, arrays, and ranges 
# Duck typing - all that matters is how an element behaves

# Iterate over a hash using hof

# charlie_bbq.map do |key, value|
#   p "The #{key} made by #{value} is gucci!"
# end

# Output:
# "The macncheese made by Davon is gucci!"
# "The smoked_ribs made by Stephen is gucci!"
# "The collard_greens made by Lance is gucci!"
# "The lumpia made by Michael is gucci!"
# "The smoked_salmon made by Damien is gucci!"
# "The pulled_pork made by Charlean is gucci!"
# "The brisket made by Don is gucci!"

# Save the array created by the hof
# pot_luck = charlie_bbq.map do |key, value|
#   "The #{key} made by #{value} is gucci!"
# end

# p pot_luck

# Output: ["The macncheese made by Davon is gucci!", "The smoked_ribs made by Stephen is gucci!", "The collard_greens made by Lance is gucci!", "The lumpia made by Michael is gucci!", "The smoked_salmon made by Damien is gucci!", "The pulled_pork made by Charlean is gucci!", "The brisket made by Don is gucci!"]

# Create a method that iterates across the previous hash

def my_review hash
  hash.map do |key, value|
    "#{key}: Was #{value} bussin'?"
  end
end

p my_review charlie_bbq
p my_review walker_island

Output:
["macncheese: Was Davon bussin'?", "smoked_ribs: Was Stephen bussin'?", "collard_greens: Was Lance bussin'?", "lumpia: Was Michael bussin'?", "smoked_salmon: Was Damien bussin'?", "pulled_pork: Was Charlean bussin'?", "brisket: Was Don bussin'?"]

["prime_minister: Was Nicole bussin'?", "pit_master: Was Michael bussin'?", "security: Was Lance bussin'?", "band: Was Sean bussin'?", "coconut_overseer: Was Jorge bussin'?", "chief_chiller: Was Austin bussin'?", "umbrella_chief: Was Damien bussin'?"]