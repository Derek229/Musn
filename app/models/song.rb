class Song < ApplicationRecord
  has_many :users, :through => :favorites


#   select u.name, u.email, s.title, s.artist, s.album, s.genre, s.id as song_id, u.id as user_id from favorites
# inner join users u on u.id = favorites.user_id
# inner join songs s on s.id = favorites.song_id

  

end
