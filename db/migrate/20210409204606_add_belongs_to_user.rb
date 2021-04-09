class AddBelongsToUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :song
    add_reference :users, :band
  end
end
