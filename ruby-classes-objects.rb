# Class - blueprint for creating objects
# Object - an instance of a class created with certain data

# Creating a class - begins with keyword "class", name is PascalCase, end with the keyword "end" shows the scope

# class PlayList
# end

# Creating an object - use new method

# p otis = PlayList.new
# Output:
#<PlayList:0x000000015c80dcb8>

# p anita = PlayList.new
# Output:
#<PlayList:0x0000000159122528>


# Storing data and methods in the class
# Setter method - establishing the values/parameters 
# instance variable - @ + variable name, stated the variables that belong to the class
# class PlayList
#   # setter method
#   def set_title title, artist
#     @song_title = title
#     @artist_name = artist
#   end
#   # getter method
#   def get_title
#     @song_title
#     @artist_name
#   end
# end

# otis = PlayList.new
# otis.set_title 'Simply Beautiful', 'Otis Redding'

# p otis.get_title
# Output: "Simply Beautiful"

# p otis
# Output:
#<PlayList:0x000000014780d1d8 @title="Simply Beautiful", @artist_name="Otis Redding">

# anita = PlayList.new 
# anita.set_title 'Angel', 'Anita Baker'

# p anita
# Output:
#<PlayList:0x00000001490860e8 @song_title="Angel", @artist_name="Anita Baker">

# p anita.get_title
# Output: "Angel"
# Getter method - to display the info without the id

# Implicit return
# Example:
#   # getter method
#   def get_title
#     @song_title
#     @artist_name
#   end

# p otis.get_title  

# Output: "Otis Redding"

# Refactor - 
# Initialize - a class method that runs automatically when you create a new instance of a class
# keyword "initialize"

# class PlayList

#   def initialize title, artist
#     @song_title = title
#     @artist_name = artist
#   end

#   # getter method
#   def title
#     @song_title
#     @artist_name
#   end
#   # getter method
#   def played_song
#     "You played #{@song_title}"
#   end
# end

# otis = PlayList.new 'Sitting on the Dock', 'Otis Redding'
# p otis.title
# p otis.played_song

# Output:
#<PlayList:0x000000015815ded0 @song_title="Sitting on the Dock", @artist_name="Otis Redding">

# Using setter method to show that a song was played

# class PlayList

#   def initialize title, artist
#     @song_title = title
#     @artist_name = artist
#     @played = false
#   end

#   # getter method
#   def title
#     @song_title
#   end
#   # setter method
#   def played_song
#     @played = true
#   end

# end

# otis = PlayList.new 'Satisfaction', 'Otis Redding'
# p otis

# Output:
#<PlayList:0x0000000133835750 @song_title="Satisfaction", @artist_name="Otis Redding", @played=false>

# otis.played_song
# p otis
# Output
#<PlayList:0x0000000133835750 @song_title="Satisfaction", @artist_name="Otis Redding", @played=true>

# Using conditional statements
# class PlayList

#   def initialize title, artist
#     @song_title = title
#     @artist_name = artist
#     @played = false
#   end

#   # getter method
#   def title
#     @song_title
#   end
#   # getter method
#   def artist
#     @artist_name
#   end

#   # setter method
#   def played_song
#     @played = true
#   end

#   # getter method
#   def show_info
#     if @played
#       "You have played the song #{@song_title} by #{@artist_name}"
#     else 
#       "You have not played the song #{@song_title} by #{@artist_name}"
#     end
#   end

# end

# otis = PlayList.new 'Satisfaction', 'Otis Redding'
# p otis.show_info
# Output:
# "You have not played the song Satisfaction by Otis Redding"


# otis.played_song
# p otis
#<PlayList:0x000000011e8388e8 @song_title="Satisfaction", @artist_name="Otis Redding", @played=true>
# p otis.show_info
# Output: "You have played the song Satisfaction by Otis Redding"

# p otis.artist


# Refactor
# attr_accessor method - built-in method that creates getter and setter methods
# symbol -  : + variable name

# class PlayList

#   attr_accessor :title, :artist_name, :played

#   def initialize title, artist
#     @song_title = title
#     @artist_name = artist
#     @played = false
#   end

#   # setter method
#   def played_song
#     @played = true
#   end

#   # getter method
#   def show_info
#     if @played
#       "You have played the song #{@song_title} by #{@artist_name}"
#     else 
#       "You have not played the song #{@song_title} by #{@artist_name}"
#     end
#   end

# end

# anita = PlayList.new 'Body and Soul', 'Anita Baker'
# p anita

# Output:
#<PlayList:0x000000012793ad28 @song_title="Body and Soul", @artist_name="Anita Baker", @played=false>

# anita.title = 'Angel'

# p anita

# Because the instance variable was not referenced as it is on the initialize method, when assigning @title, it adds a new variable vice updating @song_title.

# Output:
#<PlayList:0x000000015889a770 @song_title="Body and Soul", @artist_name="Anita Baker", @played=false, @title="Angel">

class PlayList

  attr_accessor :song_title, :artist_name, :played

  def initialize title, artist
    @song_title = title
    @artist_name = artist
    @played = false
  end

  # setter method
  def played_song
    @played = true
  end

  # getter method
  def show_info
    if @played
      "You have played the song #{@song_title} by #{@artist_name}"
    else 
      "You have not played the song #{@song_title} by #{@artist_name}"
    end
  end

end

anita = PlayList.new 'Body and Soul', 'Anita Baker'
# p anita
# Output:
#<PlayList:0x00000001550ae168 @song_title="Body and Soul", @artist_name="Anita Baker", @played=false>

anita.song_title = 'Angel'

p anita
# Output:
#<PlayList:0x0000000153935f90 @song_title="Angel", @artist_name="Anita Baker", @played=false>

p anita.artist_name
# Output: "Anita Baker"