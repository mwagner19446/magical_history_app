class Neighborhood < ActiveRecord::Base
  has_many :places

  #validations
  validates :name, presence: true
  validates :longitude, presence: true
  validates :latitude, presence: true
end
