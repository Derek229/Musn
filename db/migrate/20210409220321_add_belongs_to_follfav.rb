class AddBelongsToFollfav < ActiveRecord::Migration[6.1]
  def change
    add_reference :follows, :user
    add_reference :follows, :band
    add_reference :favorites, :user
    add_reference :favorites, :song
  end
end
