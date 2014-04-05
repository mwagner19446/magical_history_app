class Place < ActiveRecord::Base
  belongs_to :neighborhood

  #validates
  validates :name, presence: true
  validates :longitude, presence: true
  validates :latitude, presence: true

end
