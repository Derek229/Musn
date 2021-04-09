class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :artist
      t.string :album
      t.string :genre
      t.string :spotify_id
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
