require 'spec_helper'

describe Neighborhood do
 it {should have_many(:places)}
 it {should validate_presence_of(:longitude)}
 it {should validate_presence_of(:latitude)}
end
