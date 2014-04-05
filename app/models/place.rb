class Place < ActiveRecord::Base
  belongs_to :neighborhood

  #validations 
  validates :name, presence: true 
  validates :longitude, presence: true
  validates :latitude, presence: true

end
