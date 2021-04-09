# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

#user seed file

10.times do |i|
  user = User.create(
    name: Faker::Name.name,
    email: "user#{i+1}@test.com",
    image: '', 
    password: '123456'
  )

end


15.times do 
  song = Song.create(
    title: Faker::Music::RockBand.song,
    artist: Faker::Music.band,
    album: Faker::Music.album,
    genre: Faker::Music.genre, 
    user_id: rand(1..5)
  )
end

5.times do
  band = Band.create(
    name: Faker::Music.band,
    genre:Faker::Music.genre,
    members:Faker::Music.instrument, 
    image:''
  )
end


puts "completed"


 