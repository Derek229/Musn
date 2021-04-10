class Follow < ApplicationRecord
  belongs_to :user
  belongs_to :band


  def self.follow_index(user_id)

    select('u.name, u.email, b.name as band_name, b.genre, b.members, b.id as band_id, u.id as user_id') 
    .from('follows')
    .joins('inner join users u on u.id = follows.user_id inner join bands b on b.id = follows.band_id')
    .order('u.id')
    .where("u.id = #{user_id}")
  end
end
