class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :song


# select u.name, u.email, s.title, s.artist, s.album, s.genre, s.id as song_id, u.id as user_id from favorites
# inner join users u on u.id = favorites.user_id
# inner join songs s on s.id = favorites.song_id

def self.favorite_table(user_id)
  select('u.name, u.email, s.title, s.artist, s.album, s.genre, s.id as song_id, u.id as user_id')
  .from('favorites')
  .joins('inner join users u on u.id = favorites.user_id inner join songs s on s.id = favorites.song_id')
  .order('u.id')
  .where("u.id =  ?", "#{user_id}")
end
end
