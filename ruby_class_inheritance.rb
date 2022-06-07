#  Class Inheritance 6/7/22

#  To make programs that resemble different music streaming application using ruby

# spotify
# youtube music
# apple music
# Amazon music
# Sirius xm
# Pandora

# music streaming app 
  # play and stop/ pause
  # search
  # playlist
  # songs
    # artist
    # genre
    # title
    # albums
    # length
  # rating 
# refactor to song streaming app
  class SongStreamingApp 
    attr_accessor :title, :artist, :playing
    def initialize title, artist
      @title = title
      @artist = artist
    end
    def play_song
      @playing = true
    end
    def get_playing
      # get playing checks if ____
      if @playing
        # and tells us ______ is playing
        #  don't forget to print if you want the info displayed in terminal
        #  p "the song #{@song} is playing"
       p "the song #{@title} by #{@artist} is playing"
      end
    end
  end

  # Passing an object as the song argument so we can nest the values with assoctiated keys
  
  # siruis = MusicStreamingApp.new 'My Way'
  # p siruis
  # p siruis.object_id --> 60
  # p siruis.song  --> "My Way"
  # p siruis.playing --> nil
  # siruis.get_playing --> nothing happened
  # siruis.play_song
  # siruis.get_playing -->"the song My Way is playing"

  # xm = MusicStreamingApp.new({:title => 'My Way', :artist => 'Frank Sinatra'})
  # p xm
  # xm.play_song
  # xm.get_playing

# apple music
# Class Inheritance syntax 
  #  uses the less than symbol to denote inheritance from Parent Class
class AppleMusic < SongStreamingApp
  def initialize title, artist
    # keyword super passess all arguments up to the parent class's initialize method
    super
  end

end

baby_shark = AppleMusic.new("Baby Shark", "The Devil himself")

# baby_shark.playing = true
# baby_shark.get_playing


# Spotify

class Spotify < SongStreamingApp
  def initialize title, artist
    super 
    @times_played = 0
  end
  # need some kinfd of way to track the number of times spotify has played a song and that the song is currently being played
  def play_song_count
    @times_played = @times_played + 1
    # calls on the parent objects play_song method
    self.play_song
  end

end

beibs = Spotify.new("Sorry", "Justin Beiber")
# p beibs

beibs.play_song_count
beibs.play_song_count
beibs.play_song_count
# beibs.play_song
p beibs
beibs.get_playing