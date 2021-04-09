class Band < ApplicationRecord
  has_many :users, :through => :follows
end
