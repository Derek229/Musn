# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

# user seed file

10.times do |i|
  user = User.create(
    name: Faker::Name.name,
    email: "user#{i+1}@test.com",
    image: Faker::Avatar.image, 
    password: '123456'
  )

end



  

5.times do
  band = Band.create(
    name: Faker::Music.band,
    genre:Faker::Music.genre,
    members:Faker::Music.instrument, 
    image:'',
    user_id:rand(1..10)
  )
end



Song.create(
    title: 'Harder Better Faster Stronger',
    artist: 'Daft Punk',
    album: 'Discovery',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: 'yydNF8tuVmU'
  )
  Song.create(
    title: 'Good Morning',
    artist: 'Kanye West',
    album: 'Graduation',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: '6CHs4x2uqcQ'
  )
  Song.create(
    title: 'Homecoming',
    artist: 'Kanye West',
    album: 'Graduation',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: 'LQ488QrqGE4'
  )
  Song.create(
    title: 'Sunflower',
    artist: 'Post Malone',
    album: 'Sunflower',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: 'ApXoWvfEYVU'
  )
  Song.create(
    title: 'Harder Better Faster Stronger',
    artist: 'Daft Punk',
    album: 'Discovery',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: 'yydNF8tuVmU'
  )
  Song.create(
    title: 'Comfortably Numb',
    artist: 'Pink Floyd',
    album: 'Dark Side of the Moon',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: '_FrOQC-zEog'
  )
  Song.create(
    title: 'Stairway to Heaven',
    artist: 'Led Zepplin',
    album: 'Mothership',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: 'QkF3oxziUI4'
  )
  Song.create(
    title: 'Never Gonna Give you Up',
    artist: 'Rick Astley',
    album: 'Single',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: 'dQw4w9WgXcQ'
  )
  Song.create(
    title: 'Old Town Road',
    artist: 'lil Nas X',
    album: 'Single',
    genre: Faker::Music.genre,
    user_id:rand(1..10),
    spotify_id: 'r7qovpFAGrQ'
  )
  Song.create(
    title: 'Cat Vibing',
    artist: 'drum guy',
    album: 'Single',
    genre: 'Master Piece',
    user_id:rand(1..10),
    spotify_id: 'NUYvbT6vTPs'
  )

  10.times do 
    Favorite.create(user_id: rand(1..10), song_id: rand(1..10))
    Follow.create(user_id: rand(1..10), band_id: rand(1..5))
  end


puts "completed"


 