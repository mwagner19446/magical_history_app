require 'spec_helper'

describe Neighborhood do
 it {should validate_presence_of(:name)}
 it {should have_many(:places)}

end
