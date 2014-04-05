class Neighborhood < ActiveRecord::Base
  has_many :places

  #validations
  validates :name, presence: true
end
