require 'spec_helper'

describe Place do
  it { should belong_to(:neighborhood)}
  it { should validate_presence_of(:longitude)}
  it { should validate_presence_of(:latitude)}
end
